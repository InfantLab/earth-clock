namespace EarthClock.Screensaver;

public sealed class ScreensaverSettings
{
    // Keep in sync with wallpaper-engine project options where possible.
    public string DataSource { get; set; } = "live"; // "live" | "bundled"

    public string Projection { get; set; } = "orthographic";

    // "off", "wind", "temp", ... or "random"
    public string Overlay { get; set; } = "wind";

    // Height/level selection (surface vs isobaric). Keep it simple for now.
    public string Height { get; set; } = "level"; // "level" (surface) or "1000hPa", ...

    public int SpinSpeed { get; set; } = 0; // degrees/min (0 = off)

    public bool ShowClock { get; set; } = true;
    public bool DayNight { get; set; } = true;

    public static readonly string[] ProjectionOptions =
    [
        "orthographic",
        "equirectangular",
        "azimuthal_equidistant",
        "conic_equidistant",
        "stereographic",
        "waterman",
        "winkel3",
        "atlantis"
    ];

    public static readonly (string Label, string Value)[] OverlayOptions =
    [
        ("Random (each start)", "random"),
        ("None", "off"),
        ("Wind Speed", "wind"),
        ("Temperature", "temp"),
        ("Relative Humidity", "relative_humidity"),
        ("Air Density", "air_density"),
        ("Wind Power Density", "wind_power_density"),
        ("Total Precipitable Water", "total_precipitable_water"),
        ("Total Cloud Water", "total_cloud_water"),
        ("Mean Sea Level Pressure", "mean_sea_level_pressure")
    ];

    public static readonly (string Label, string Value)[] DataSourceOptions =
    [
        ("Live (fallback to bundled)", "live"),
        ("Bundled only", "bundled")
    ];

    public static readonly (string Label, string Value)[] HeightOptions =
    [
        ("Surface", "level"),
        ("1000 hPa", "1000hPa"),
        ("850 hPa", "850hPa"),
        ("700 hPa", "700hPa"),
        ("500 hPa", "500hPa"),
        ("250 hPa", "250hPa"),
        ("70 hPa", "70hPa"),
        ("10 hPa", "10hPa")
    ];
}

