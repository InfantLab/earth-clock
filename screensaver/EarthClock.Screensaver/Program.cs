namespace EarthClock.Screensaver;

static class Program
{
    private static readonly string LogPath = Path.Combine(
        Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData),
        "EarthClock.Screensaver",
        "debug.log");

    /// <summary>
    ///  The main entry point for the application.
    /// </summary>
    [STAThread]
    static void Main(string[] args)
    {
        try
        {
            Directory.CreateDirectory(Path.GetDirectoryName(LogPath)!);
            File.AppendAllText(LogPath, $"\n[{DateTime.Now:yyyy-MM-dd HH:mm:ss}] Started with args: [{string.Join(", ", args)}]\n");

            // To customize application configuration such as set high DPI settings or default font,
            // see https://aka.ms/applicationconfiguration.
            ApplicationConfiguration.Initialize();

            var options = ScreensaverOptions.Parse(args);
            File.AppendAllText(LogPath, $"  Mode: {options.Mode}, PreviewHandle: {options.PreviewWindowHandle}\n");

            switch (options.Mode)
            {
                case ScreensaverMode.Config:
                    File.AppendAllText(LogPath, "  Launching ScreensaverConfigForm...\n");
                    Application.Run(new ScreensaverConfigForm());
                    break;
                case ScreensaverMode.Preview:
                case ScreensaverMode.Fullscreen:
                    File.AppendAllText(LogPath, "  Launching ScreensaverForm...\n");
                    Application.Run(new ScreensaverForm(options));
                    break;
                default:
                    File.AppendAllText(LogPath, "  Default: Launching ScreensaverConfigForm...\n");
                    Application.Run(new ScreensaverConfigForm());
                    break;
            }
            File.AppendAllText(LogPath, "  Exited normally.\n");
        }
        catch (Exception ex)
        {
            try { File.AppendAllText(LogPath, $"  ERROR: {ex}\n"); } catch { }
            MessageBox.Show($"Error starting screensaver:\n\n{ex}", "Earth Clock Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
        }
    }    
}
