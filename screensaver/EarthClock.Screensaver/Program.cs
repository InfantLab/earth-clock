namespace EarthClock.Screensaver;

static class Program
{
    /// <summary>
    ///  The main entry point for the application.
    /// </summary>
    [STAThread]
    static void Main(string[] args)
    {
        // To customize application configuration such as set high DPI settings or default font,
        // see https://aka.ms/applicationconfiguration.
        ApplicationConfiguration.Initialize();

        var options = ScreensaverOptions.Parse(args);
        switch (options.Mode)
        {
            case ScreensaverMode.Config:
                Application.Run(new ScreensaverConfigForm());
                break;
            case ScreensaverMode.Preview:
            case ScreensaverMode.Fullscreen:
                Application.Run(new ScreensaverForm(options));
                break;
            default:
                Application.Run(new ScreensaverConfigForm());
                break;
        }
    }    
}
