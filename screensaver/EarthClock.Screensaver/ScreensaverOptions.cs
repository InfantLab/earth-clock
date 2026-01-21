using System.Globalization;

namespace EarthClock.Screensaver;

public sealed record ScreensaverOptions(ScreensaverMode Mode, nint PreviewWindowHandle)
{
    public static ScreensaverOptions Parse(string[] args)
    {
        // Windows screensavers typically support:
        // /s (show), /p <HWND> (preview), /c (config)
        // Variants seen in the wild: /p:12345, /c:12345, -s, -p, etc.
        if (args.Length == 0)
        {
            return new ScreensaverOptions(ScreensaverMode.Config, 0);
        }

        var first = NormalizeArg(args[0]);
        if (IsSwitch(first, "s"))
        {
            return new ScreensaverOptions(ScreensaverMode.Fullscreen, 0);
        }

        if (IsSwitch(first, "c"))
        {
            return new ScreensaverOptions(ScreensaverMode.Config, 0);
        }

        if (IsSwitch(first, "p"))
        {
            var hwnd = TryParseHandleFromArgs(args) ?? 0;
            return new ScreensaverOptions(ScreensaverMode.Preview, hwnd);
        }

        // Some installers invoke the .scr without args, or with odd switches.
        return new ScreensaverOptions(ScreensaverMode.Config, 0);
    }

    private static string NormalizeArg(string arg) => arg.Trim().ToLowerInvariant();

    private static bool IsSwitch(string arg, string name)
    {
        // "/s", "-s", "/s:..." etc
        if (arg == "/" + name || arg == "-" + name)
        {
            return true;
        }
        return arg.StartsWith("/" + name + ":", StringComparison.Ordinal) ||
               arg.StartsWith("-" + name + ":", StringComparison.Ordinal);
    }

    private static nint? TryParseHandleFromArgs(string[] args)
    {
        // Supported forms:
        // /p 12345
        // /p:12345
        if (args.Length >= 2 && TryParseHwnd(args[1], out var hwndFromSecond))
        {
            return hwndFromSecond;
        }

        var first = NormalizeArg(args[0]);
        var idx = first.IndexOf(':');
        if (idx >= 0 && idx + 1 < first.Length)
        {
            var handlePart = first[(idx + 1)..];
            if (TryParseHwnd(handlePart, out var hwndFromInline))
            {
                return hwndFromInline;
            }
        }

        return null;
    }

    private static bool TryParseHwnd(string s, out nint hwnd)
    {
        // HWND is typically passed as decimal, but accept hex too.
        s = s.Trim();
        if (s.StartsWith("0x", StringComparison.OrdinalIgnoreCase))
        {
            if (nint.Size == 8 && long.TryParse(s[2..], NumberStyles.HexNumber, CultureInfo.InvariantCulture, out var l))
            {
                hwnd = (nint)l;
                return hwnd != 0;
            }
            if (nint.Size == 4 && int.TryParse(s[2..], NumberStyles.HexNumber, CultureInfo.InvariantCulture, out var i))
            {
                hwnd = (nint)i;
                return hwnd != 0;
            }
        }

        if (long.TryParse(s, NumberStyles.Integer, CultureInfo.InvariantCulture, out var dec))
        {
            hwnd = (nint)dec;
            return hwnd != 0;
        }

        hwnd = 0;
        return false;
    }
}

