using System.Text.Json;

namespace EarthClock.Screensaver;

internal static class SettingsStore
{
    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        WriteIndented = true
    };

    internal static string SettingsDirectory =>
        Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData), "EarthClock.Screensaver");

    internal static string SettingsPath => Path.Combine(SettingsDirectory, "settings.json");

    internal static ScreensaverSettings Load()
    {
        try
        {
            if (!File.Exists(SettingsPath))
            {
                return new ScreensaverSettings();
            }

            var json = File.ReadAllText(SettingsPath);
            return JsonSerializer.Deserialize<ScreensaverSettings>(json, JsonOptions) ?? new ScreensaverSettings();
        }
        catch
        {
            return new ScreensaverSettings();
        }
    }

    internal static void Save(ScreensaverSettings settings)
    {
        Directory.CreateDirectory(SettingsDirectory);
        var json = JsonSerializer.Serialize(settings, JsonOptions);
        File.WriteAllText(SettingsPath, json);
    }
}

