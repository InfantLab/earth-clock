using Microsoft.Web.WebView2.Core;
using Microsoft.Web.WebView2.WinForms;

namespace EarthClock.Screensaver;

public sealed class ScreensaverForm : Form
{
    private readonly ScreensaverOptions _options;
    private WebView2? _webView;
    private InputExitMessageFilter? _exitFilter;
    private System.Windows.Forms.Timer? _previewResizeTimer;
    private System.Windows.Forms.Timer? _exitPollTimer;
    private bool _cursorHidden;
    private ScreensaverSettings _settings = new();
    private bool _postLoadApplied;
    private bool _exitRequested;
    private Point _initialCursorPos;
    private DateTime _exitStartTimeUtc;
    
    // Shared HttpClient for CORS proxy - reuse connections for better performance
    private static readonly System.Net.Http.HttpClient _sharedHttpClient = new()
    {
        Timeout = TimeSpan.FromSeconds(30)
    };

    public ScreensaverForm(ScreensaverOptions options)
    {
        _options = options;

        Text = "Earth Clock Screensaver";
        BackColor = Color.Black;
        StartPosition = FormStartPosition.Manual;
        ShowInTaskbar = false;

        if (_options.Mode == ScreensaverMode.Fullscreen)
        {
            FormBorderStyle = FormBorderStyle.None;
            TopMost = true;
            
            // Only create WebView2 for fullscreen mode
            _webView = new WebView2
            {
                Dock = DockStyle.Fill,
                BackColor = Color.Black
            };
            Controls.Add(_webView);
        }
        else if (_options.Mode == ScreensaverMode.Preview)
        {
            FormBorderStyle = FormBorderStyle.None;
            TopMost = false;
        }
    }

    protected override void OnHandleCreated(EventArgs e)
    {
        base.OnHandleCreated(e);

        if (_options.Mode == ScreensaverMode.Preview)
        {
            if (_options.PreviewWindowHandle == 0)
            {
                // Invalid preview HWND; fall back to config-like behavior.
                BeginInvoke(() =>
                {
                    Close();
                    new ScreensaverConfigForm().ShowDialog();
                });
                return;
            }

            // Embed this form inside the preview window.
            NativeMethods.SetParent(Handle, _options.PreviewWindowHandle);

            var style = NativeMethods.GetWindowLong(Handle, NativeMethods.GWL_STYLE);
            style |= NativeMethods.WS_CHILD;
            style &= ~NativeMethods.WS_POPUP;
            NativeMethods.SetWindowLong(Handle, NativeMethods.GWL_STYLE, style);

            ResizeToPreview();

            _previewResizeTimer = new System.Windows.Forms.Timer { Interval = 250 };
            _previewResizeTimer.Tick += (_, _) => ResizeToPreview();
            _previewResizeTimer.Start();
        }
        else if (_options.Mode == ScreensaverMode.Fullscreen)
        {
            // Primary monitor
            var bounds = Screen.PrimaryScreen?.Bounds ?? new Rectangle(0, 0, 1920, 1080);
            Bounds = bounds;
        }
    }

    protected override async void OnShown(EventArgs e)
    {
        base.OnShown(e);

        if (_options.Mode == ScreensaverMode.Fullscreen)
        {
            HideCursor();
            ArmExitOnInput();
            ArmExitPollingFallback();
            await InitializeWebViewAsync();
        }
        else if (_options.Mode == ScreensaverMode.Preview)
        {
            // WebView2 doesn't work reliably when embedded in Control Panel preview.
            // Show a static preview image instead.
            ShowStaticPreview();
        }
    }

    private void ShowStaticPreview()
    {
        // WebView2 is not created for preview mode, so just set up static content

        // Try to load a preview image
        var baseDir = AppContext.BaseDirectory;
        var previewPath = Path.Combine(baseDir, "wallpaper-engine", "preview.jpg");
        
        if (File.Exists(previewPath))
        {
            try
            {
                var pictureBox = new PictureBox
                {
                    Dock = DockStyle.Fill,
                    SizeMode = PictureBoxSizeMode.Zoom,
                    BackColor = Color.Black,
                    Image = Image.FromFile(previewPath)
                };
                Controls.Add(pictureBox);
                return;
            }
            catch { /* fall through to colored background */ }
        }
        
        // Fallback: just show a dark blue background with the title
        BackColor = Color.FromArgb(0, 20, 40);
        var label = new Label
        {
            Text = "Earth Clock",
            ForeColor = Color.White,
            BackColor = Color.Transparent,
            Font = new Font("Segoe UI", 8f, FontStyle.Regular),
            AutoSize = false,
            Dock = DockStyle.Fill,
            TextAlign = ContentAlignment.MiddleCenter
        };
        Controls.Add(label);
    }

    protected override void OnDeactivate(EventArgs e)
    {
        // In fullscreen screensaver mode, losing activation should exit immediately.
        if (_options.Mode == ScreensaverMode.Fullscreen)
        {
            RequestExit();
        }
        base.OnDeactivate(e);
    }

    protected override void OnFormClosed(FormClosedEventArgs e)
    {
        try
        {
            _previewResizeTimer?.Stop();
            _previewResizeTimer?.Dispose();
        }
        catch { /* ignore */ }

        try
        {
            _exitPollTimer?.Stop();
            _exitPollTimer?.Dispose();
        }
        catch { /* ignore */ }

        if (_exitFilter is not null)
        {
            try { Application.RemoveMessageFilter(_exitFilter); } catch { /* ignore */ }
            _exitFilter = null;
        }

        // Clean up old WebView2 session folders (older than 1 hour)
        CleanupOldWebView2Sessions();

        ShowCursor();
        base.OnFormClosed(e);
    }

    private static void CleanupOldWebView2Sessions()
    {
        try
        {
            var webView2Dir = Path.Combine(
                Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData),
                "EarthClock.Screensaver",
                "WebView2");
            if (!Directory.Exists(webView2Dir)) return;

            var cutoff = DateTime.UtcNow.AddHours(-1);
            foreach (var dir in Directory.GetDirectories(webView2Dir))
            {
                try
                {
                    var info = new DirectoryInfo(dir);
                    if (info.CreationTimeUtc < cutoff)
                    {
                        info.Delete(recursive: true);
                    }
                }
                catch { /* ignore locked folders */ }
            }
        }
        catch { /* ignore */ }
    }

    private void ArmExitOnInput()
    {
        _exitFilter = new InputExitMessageFilter(() =>
        {
            RequestExit();
        });
        Application.AddMessageFilter(_exitFilter);
    }

    private void ArmExitPollingFallback()
    {
        // WebView2 can sometimes capture input such that our message filter doesn't see it.
        // This polling fallback ensures we still exit on any user activity.
        _initialCursorPos = Cursor.Position;
        _exitStartTimeUtc = DateTime.UtcNow;

        _exitPollTimer = new System.Windows.Forms.Timer { Interval = 100 };
        _exitPollTimer.Tick += (_, _) =>
        {
            if (_options.Mode != ScreensaverMode.Fullscreen) return;

            // Give a tiny grace window to avoid spurious immediate exits during startup.
            if ((DateTime.UtcNow - _exitStartTimeUtc).TotalMilliseconds < 250)
            {
                return;
            }

            var pos = Cursor.Position;
            var dx = Math.Abs(pos.X - _initialCursorPos.X);
            var dy = Math.Abs(pos.Y - _initialCursorPos.Y);
            if (dx > 3 || dy > 3)
            {
                RequestExit();
                return;
            }

            // Any key/mouse button pressed -> exit.
            // Check full range to match “any key press” expectation.
            for (var vk = 1; vk < 256; vk++)
            {
                if ((NativeMethods.GetAsyncKeyState(vk) & unchecked((short)0x8000)) != 0)
                {
                    RequestExit();
                    return;
                }
            }
        };
        _exitPollTimer.Start();
    }

    private void RequestExit()
    {
        if (_exitRequested) return;
        _exitRequested = true;
        if (!IsDisposed)
        {
            try { BeginInvoke(Close); } catch { /* ignore */ }
        }
    }

    private void ResizeToPreview()
    {
        if (_options.PreviewWindowHandle == 0)
        {
            return;
        }

        if (NativeMethods.GetClientRect(_options.PreviewWindowHandle, out var rect))
        {
            NativeMethods.MoveWindow(Handle, 0, 0, rect.Width, rect.Height, true);
        }
    }

    private async Task InitializeWebViewAsync()
    {
        _settings = SettingsStore.Load();

        var baseDir = AppContext.BaseDirectory;
        var contentDir = Path.Combine(baseDir, "wallpaper-engine");
        var indexPath = Path.Combine(contentDir, "index.html");

        if (!File.Exists(indexPath))
        {
            ShowMissingAssets(indexPath);
            return;
        }

        try
        {
            // Use a unique session ID to avoid "resource in use" conflicts when
            // multiple instances try to use the same WebView2 user data folder.
            var sessionId = Guid.NewGuid().ToString("N")[..8];
            var userDataDir = Path.Combine(
                Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData),
                "EarthClock.Screensaver",
                "WebView2",
                sessionId);
            Directory.CreateDirectory(userDataDir);

            // Create environment with options to prevent throttling
            var options = new CoreWebView2EnvironmentOptions
            {
                // Disable background throttling so animations run at full speed
                // Also disable occlusion detection and enable high-performance rendering
                AdditionalBrowserArguments = string.Join(" ",
                    "--disable-background-timer-throttling",
                    "--disable-backgrounding-occluded-windows",
                    "--disable-renderer-backgrounding",
                    "--disable-features=CalculateNativeWinOcclusion",
                    "--disable-hang-monitor",
                    "--disable-ipc-flooding-protection",
                    "--enable-features=UseSkiaRenderer",
                    "--force-gpu-rasterization",
                    "--enable-gpu-rasterization",
                    "--enable-zero-copy",
                    "--ignore-gpu-blocklist")
            };
            var env = await CoreWebView2Environment.CreateAsync(null, userDataDir, options);
            await _webView!.EnsureCoreWebView2Async(env);

            // Harden a bit for screensaver mode.
            _webView.CoreWebView2.Settings.AreDefaultContextMenusEnabled = false;
            _webView.CoreWebView2.Settings.AreDevToolsEnabled = IsDevToolsEnabled();
            _webView.CoreWebView2.Settings.IsStatusBarEnabled = false;

            // Serve local files from a virtual host to avoid file:// restrictions (XHR, fetch, etc).
            const string host = "earth-clock.local";
            _webView.CoreWebView2.SetVirtualHostNameToFolderMapping(
                host,
                contentDir,
                CoreWebView2HostResourceAccessKind.Allow);

            // Add filter for live server requests BEFORE subscribing to the event
            _webView.CoreWebView2.AddWebResourceRequestedFilter(
                "https://earth-clock.onemonkey.org/*",
                CoreWebView2WebResourceContext.All);
            AppendLog("CORS proxy filter registered for earth-clock.onemonkey.org");

            // Enable cross-origin requests by intercepting and proxying live server requests.
            // WebView2 blocks cross-origin XHR from virtual hosts, so we need to handle this.
            _webView.CoreWebView2.WebResourceRequested += async (sender, args) =>
            {
                var uri = new Uri(args.Request.Uri);
                AppendLog($"WebResourceRequested: {args.Request.Uri}");
                // Only handle requests to our live server
                if (uri.Host.Equals("earth-clock.onemonkey.org", StringComparison.OrdinalIgnoreCase))
                {
                    var deferral = args.GetDeferral();
                    AppendLog($"Proxy start: {args.Request.Uri}");
                    try
                    {
                        // Use shared HttpClient for connection reuse
                        var response = await _sharedHttpClient.GetAsync(args.Request.Uri);
                        var content = await response.Content.ReadAsByteArrayAsync();
                        var contentType = response.Content.Headers.ContentType?.ToString() ?? "application/json";
                        AppendLog($"Proxy fetched: {args.Request.Uri} -> {content.Length} bytes");

                        var memStream = new MemoryStream(content);
                        var webResponse = _webView.CoreWebView2.Environment.CreateWebResourceResponse(
                            memStream,
                            (int)response.StatusCode,
                            response.ReasonPhrase ?? "OK",
                            $"Content-Type: {contentType}\nAccess-Control-Allow-Origin: *");
                        args.Response = webResponse;
                        AppendLog($"Proxy OK: {args.Request.Uri} -> {response.StatusCode}");
                    }
                    catch (Exception ex)
                    {
                        AppendLog($"Proxy error for {args.Request.Uri}: {ex.Message}");
                        // Return a 502 error response so the JS knows to fall back
                        try
                        {
                            var errorStream = new MemoryStream(System.Text.Encoding.UTF8.GetBytes($"{{\"error\": \"{ex.Message}\"}}"));
                            args.Response = _webView.CoreWebView2.Environment.CreateWebResourceResponse(
                                errorStream, 502, "Bad Gateway", "Content-Type: application/json");
                        }
                        catch { /* ignore */ }
                    }
                    finally
                    {
                        deferral.Complete();
                    }
                }
            };

            // Set wallpaperSettings before any scripts run (used by data-source-wrapper.js).
            var initScript =
                "window.wallpaperSettings = window.wallpaperSettings || {};\n" +
                $"window.wallpaperSettings.dataSource = {ToJsString(_settings.DataSource)};\n" +
                $"window.wallpaperSettings.dayNightEnabled = {(_settings.DayNight ? "true" : "false")};\n" +
                $"window.wallpaperSettings.spinSpeed = {_settings.SpinSpeed};\n" +
                "console.log('Screensaver settings injected:', JSON.stringify(window.wallpaperSettings));\n";
            await _webView.CoreWebView2.AddScriptToExecuteOnDocumentCreatedAsync(initScript);

            // Capture JS errors for debugging via chrome.webview.postMessage
            await _webView.CoreWebView2.AddScriptToExecuteOnDocumentCreatedAsync(@"
(() => {
  function send(type, payload) {
    try { chrome.webview.postMessage(Object.assign({ type }, payload || {})); } catch {}
  }
  send('doccreated', { href: location.href });
  // Log network activity early (covers d3.json/XHR before our other hooks).
  (function hookNetwork() {
    try {
      const origOpen = XMLHttpRequest.prototype.open;
      const origSend = XMLHttpRequest.prototype.send;
      XMLHttpRequest.prototype.open = function(method, url) {
        try { this.__ec_url = url; this.__ec_method = method; } catch {}
        return origOpen.apply(this, arguments);
      };
      XMLHttpRequest.prototype.send = function() {
        try {
          this.addEventListener('loadend', () => {
            try { send('xhr', { method: String(this.__ec_method || ''), url: String(this.__ec_url || ''), status: this.status }); } catch {}
          });
        } catch {}
        return origSend.apply(this, arguments);
      };

      if (typeof window.fetch === 'function') {
        const origFetch = window.fetch.bind(window);
        window.fetch = function() {
          const url = arguments[0];
          return origFetch.apply(null, arguments).then(
            (res) => { send('fetch', { url: String(url), status: res.status }); return res; },
            (err) => { send('fetchfail', { url: String(url), error: String(err) }); throw err; }
          );
        };
      }
      send('networkhooked', {});
    } catch (e) {
      send('networkhookfail', { error: String(e) });
    }
  })();
  window.addEventListener('DOMContentLoaded', () => {
    function snap() {
      const anim = document.getElementById('animation');
      const map = document.getElementById('map');
      return {
        href: location.href,
        hash: location.hash,
        w: window.innerWidth,
        h: window.innerHeight,
        dpr: window.devicePixelRatio,
        canvasW: anim && anim.width,
        canvasH: anim && anim.height,
        canvasClientW: anim && anim.clientWidth,
        canvasClientH: anim && anim.clientHeight,
        svgW: map && map.getAttribute && map.getAttribute('width'),
        svgH: map && map.getAttribute && map.getAttribute('height'),
        svgClientW: map && map.clientWidth,
        svgClientH: map && map.clientHeight
      };
    }
    send('domcontentloaded', snap());
    setTimeout(() => send('heartbeat', snap()), 2000);
  });
  window.addEventListener('error', (e) => {
    send('error', { message: String(e.message || e), filename: e.filename, lineno: e.lineno, colno: e.colno, stack: e.error && e.error.stack });
  });
  window.addEventListener('unhandledrejection', (e) => {
    send('unhandledrejection', { message: String(e.reason), stack: e.reason && e.reason.stack });
  });

  // Instrument µ.loadJson once available so we can see what the app is trying to load.
  (function hookLoadJson() {
    try {
      if (window.µ && typeof window.µ.loadJson === 'function' && !window.__ecLoadJsonHooked) {
        window.__ecLoadJsonHooked = true;
        const orig = window.µ.loadJson;
        window.µ.loadJson = function(url) {
          send('loadjson', { url: String(url) });
          try {
            const p = orig(url);
            if (p && typeof p.then === 'function') {
              return p.then(
                (r) => r,
                (err) => {
                  send('loadjsonfail', { url: String(url), error: String(err && (err.message || err.statusText) || err) });
                  throw err;
                }
              );
            }
            return p;
          } catch (err) {
            send('loadjsonfail', { url: String(url), error: String(err && err.message || err) });
            throw err;
          }
        };
        send('loadjsonhooked', {});
        return;
      }
    } catch {}
    setTimeout(hookLoadJson, 100);
  })();
})();
");

            _webView.CoreWebView2.WebMessageReceived += (_, ev) =>
            {
                try
                {
                    AppendLog("[WebMessage] " + ev.WebMessageAsJson);
                }
                catch
                {
                    // ignore
                }
            };

            _webView.CoreWebView2.WebResourceResponseReceived += (_, ev) =>
            {
                try
                {
                    var response = ev.Response;
                    if (response is null) return;
                    if (response.StatusCode >= 400)
                    {
                        AppendLog($"[HTTP {response.StatusCode}] {ev.Request.Uri}");
                    }
                }
                catch
                {
                    // ignore
                }
            };

            _webView.CoreWebView2.NavigationCompleted += async (_, nav) =>
            {
                if (!nav.IsSuccess)
                {
                    AppendLog($"Navigation failed: {nav.WebErrorStatus}");
                    ShowNavigationError(nav.WebErrorStatus);
                    return;
                }

                // Apply post-load settings that aren't hash-based (once).
                if (_postLoadApplied) return;
                _postLoadApplied = true;
                await ApplyPostLoadSettingsAsync();
            };

            var url = BuildStartUrl(host);
            AppendLog("Navigate: " + url);
            _webView.Source = new Uri(url);
        }
        catch (Exception ex)
        {
            AppendLog(ex.ToString());
            ShowError(ex);
        }
    }

    private static bool IsDevToolsEnabled()
    {
        var v = Environment.GetEnvironmentVariable("EARTHCLOCK_SCREENSAVER_DEVTOOLS");
        return string.Equals(v, "1", StringComparison.OrdinalIgnoreCase) ||
               string.Equals(v, "true", StringComparison.OrdinalIgnoreCase);
    }

    private static string ToJsString(string value)
    {
        // minimal string escaping for our controlled values
        return "\"" + value.Replace("\\", "\\\\").Replace("\"", "\\\"") + "\"";
    }

    private string BuildStartUrl(string host)
    {
        // earth.js reads initial state from the hash. Use it as our “properties” transport.
        var overlayValue = _settings.Overlay;
        if (string.Equals(overlayValue, "random", StringComparison.OrdinalIgnoreCase))
        {
            // Pick once per start.
            var pool = ScreensaverSettings.OverlayOptions
                .Select(x => x.Value)
                .Where(v => v is not ("random" or "off"))
                .ToArray();
            overlayValue = pool.Length == 0 ? "wind" : pool[Random.Shared.Next(pool.Length)];
        }

        // Base config: current wind at selected height & projection.
        var surface = "surface";
        var level = "level";
        if (!string.Equals(_settings.Height, "level", StringComparison.OrdinalIgnoreCase))
        {
            surface = "isobaric";
            level = _settings.Height;
        }

        var dir = "current";
        var param = "wind";

        // Overlay hash fragment. Special cases:
        // - wind is the default overlayType (omit overlay=...; keep it clean)
        // - off means no overlay
        // - other values map directly
        var overlaySegment = overlayValue switch
        {
            "wind" => "",
            "off" => "overlay=off",
            _ => $"overlay={overlayValue}"
        };

        var projection = string.IsNullOrWhiteSpace(_settings.Projection) ? "orthographic" : _settings.Projection;
        var spinSegment = _settings.SpinSpeed > 0 ? $"spin={Math.Clamp(_settings.SpinSpeed, 0, 360)}" : "";

        var segments = new List<string> { dir, param, surface, level };
        if (!string.IsNullOrEmpty(overlaySegment)) segments.Add(overlaySegment);
        segments.Add(projection);
        if (!string.IsNullOrEmpty(spinSegment)) segments.Add(spinSegment);

        var hash = string.Join("/", segments);
        return $"https://{host}/index.html#{hash}";
    }

    private async Task ApplyPostLoadSettingsAsync()
    {
        // Some settings are not in the hash and need JS calls.
        // earth.js exposes window.showTimeDisplay / closeTimeDisplay.
        var showClockJs = _settings.ShowClock
            ? "if (window.showTimeDisplay) { window.showTimeDisplay(); }"
            : "if (window.closeTimeDisplay) { window.closeTimeDisplay(); }";

        // Day/night is a toggle button; default state varies. Try to match requested state.
        var dayNightJs = @"
(() => {
  const btn = document.querySelector('#option-daynight');
  if (!btn) return;
  const highlighted = btn.classList.contains('highlighted');
  const want = " + (_settings.DayNight ? "true" : "false") + @";
  if (want !== highlighted) btn.click();
})();";

        // Debug watermark (helps confirm the WebView is actually painting).
        var watermarkJs = @"
(() => {
  if (document.getElementById('__ec_watermark')) return;
  const el = document.createElement('div');
  el.id = '__ec_watermark';
  el.textContent = 'EarthClock screensaver running';
  el.style.cssText = 'position:fixed;top:6px;left:6px;z-index:2147483647;color:#fff;background:rgba(0,0,0,0.4);padding:4px 6px;font:12px/1.2 monospace;border-radius:4px;pointer-events:none;';
  document.body.appendChild(el);
})();";

        try
        {
            await _webView!.CoreWebView2.ExecuteScriptAsync(watermarkJs);
            await _webView.CoreWebView2.ExecuteScriptAsync(showClockJs);
            await _webView.CoreWebView2.ExecuteScriptAsync(dayNightJs);
        }
        catch
        {
            // Ignore if navigation was replaced or WebView2 is shutting down.
        }
    }

    private static string LogPath =>
        Path.Combine(SettingsStore.SettingsDirectory, "screensaver.log");

    private static void AppendLog(string line)
    {
        try
        {
            Directory.CreateDirectory(SettingsStore.SettingsDirectory);
            File.AppendAllText(LogPath, DateTime.Now.ToString("O") + " " + line + Environment.NewLine);
        }
        catch
        {
            // ignore logging failures
        }
    }

    private void ShowNavigationError(CoreWebView2WebErrorStatus status)
    {
        Controls.Clear();
        var label = new Label
        {
            Dock = DockStyle.Fill,
            ForeColor = Color.White,
            BackColor = Color.Black,
            TextAlign = ContentAlignment.MiddleCenter,
            Text =
                "Navigation failed:\r\n\r\n" +
                status + "\r\n\r\n" +
                "Log:\r\n" +
                LogPath + "\r\n\r\n" +
                "Tip: set EARTHCLOCK_SCREENSAVER_DEVTOOLS=1 to enable DevTools."
        };
        Controls.Add(label);
    }

    private void ShowMissingAssets(string expectedIndexPath)
    {
        Controls.Clear();
        var label = new Label
        {
            Dock = DockStyle.Fill,
            ForeColor = Color.White,
            BackColor = Color.Black,
            TextAlign = ContentAlignment.MiddleCenter,
            Text =
                "Missing wallpaper assets.\r\n\r\n" +
                "Expected:\r\n" +
                expectedIndexPath + "\r\n\r\n" +
                "Build output must include the 'wallpaper-engine' folder."
        };
        Controls.Add(label);
    }

    private void ShowError(Exception ex)
    {
        Controls.Clear();
        var label = new Label
        {
            Dock = DockStyle.Fill,
            ForeColor = Color.White,
            BackColor = Color.Black,
            TextAlign = ContentAlignment.MiddleCenter,
            Text = "WebView2 initialization failed:\r\n\r\n" + ex
        };
        Controls.Add(label);
    }

    private void HideCursor()
    {
        if (_cursorHidden) return;
        Cursor.Hide();
        _cursorHidden = true;
    }

    private void ShowCursor()
    {
        if (!_cursorHidden) return;
        try { Cursor.Show(); } catch { /* ignore */ }
        _cursorHidden = false;
    }
}

