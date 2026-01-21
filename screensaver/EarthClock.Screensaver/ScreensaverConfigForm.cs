using System.Diagnostics;

namespace EarthClock.Screensaver;

public sealed class ScreensaverConfigForm : Form
{
    public ScreensaverConfigForm()
    {
        var settings = SettingsStore.Load();

        Text = "Earth Clock Screensaver";
        StartPosition = FormStartPosition.CenterScreen;
        FormBorderStyle = FormBorderStyle.FixedDialog;
        MaximizeBox = false;
        MinimizeBox = false;
        ShowInTaskbar = true;

        var info = new Label
        {
            AutoSize = false,
            Dock = DockStyle.Top,
            Height = 90,
            TextAlign = ContentAlignment.MiddleLeft,
            Padding = new Padding(12),
            Text =
                "This is the Earth Clock screensaver.\r\n\r\n" +
                "Run modes:\r\n" +
                "  /s  Fullscreen screensaver\r\n" +
                "  /p <HWND>  Preview mode\r\n\r\n" +
                "Tip: build the project, then rename the .exe to .scr to install."
        };

        var table = new TableLayoutPanel
        {
            Dock = DockStyle.Fill,
            Padding = new Padding(12, 0, 12, 0),
            ColumnCount = 2,
            RowCount = 6,
            AutoSize = true
        };
        table.ColumnStyles.Add(new ColumnStyle(SizeType.Absolute, 160));
        table.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 100));

        var dataSource = new ComboBox { DropDownStyle = ComboBoxStyle.DropDownList, Dock = DockStyle.Fill };
        foreach (var (label, value) in ScreensaverSettings.DataSourceOptions)
        {
            dataSource.Items.Add(new ComboItem(label, value));
        }
        dataSource.SelectedIndex = FindIndex(dataSource, settings.DataSource) ?? 0;

        var projection = new ComboBox { DropDownStyle = ComboBoxStyle.DropDownList, Dock = DockStyle.Fill };
        foreach (var proj in ScreensaverSettings.ProjectionOptions)
        {
            projection.Items.Add(new ComboItem(proj, proj));
        }
        projection.SelectedIndex = FindIndex(projection, settings.Projection) ?? 0;

        var overlay = new ComboBox { DropDownStyle = ComboBoxStyle.DropDownList, Dock = DockStyle.Fill };
        foreach (var (label, value) in ScreensaverSettings.OverlayOptions)
        {
            overlay.Items.Add(new ComboItem(label, value));
        }
        overlay.SelectedIndex = FindIndex(overlay, settings.Overlay) ?? 0;

        var height = new ComboBox { DropDownStyle = ComboBoxStyle.DropDownList, Dock = DockStyle.Fill };
        foreach (var (label, value) in ScreensaverSettings.HeightOptions)
        {
            height.Items.Add(new ComboItem(label, value));
        }
        height.SelectedIndex = FindIndex(height, settings.Height) ?? 0;

        var spin = new NumericUpDown
        {
            Dock = DockStyle.Left,
            Minimum = 0,
            Maximum = 360,
            Increment = 1,
            Value = Math.Clamp(settings.SpinSpeed, 0, 360),
            Width = 120
        };

        var showClock = new CheckBox { Text = "Show clock", Checked = settings.ShowClock, AutoSize = true };
        var dayNight = new CheckBox { Text = "Day/Night overlay", Checked = settings.DayNight, AutoSize = true };

        table.Controls.Add(new Label { Text = "Data source", TextAlign = ContentAlignment.MiddleLeft, Dock = DockStyle.Fill }, 0, 0);
        table.Controls.Add(dataSource, 1, 0);
        table.Controls.Add(new Label { Text = "Projection", TextAlign = ContentAlignment.MiddleLeft, Dock = DockStyle.Fill }, 0, 1);
        table.Controls.Add(projection, 1, 1);
        table.Controls.Add(new Label { Text = "Overlay", TextAlign = ContentAlignment.MiddleLeft, Dock = DockStyle.Fill }, 0, 2);
        table.Controls.Add(overlay, 1, 2);
        table.Controls.Add(new Label { Text = "Height", TextAlign = ContentAlignment.MiddleLeft, Dock = DockStyle.Fill }, 0, 3);
        table.Controls.Add(height, 1, 3);
        table.Controls.Add(new Label { Text = "Auto-rotate (deg/min)", TextAlign = ContentAlignment.MiddleLeft, Dock = DockStyle.Fill }, 0, 4);
        table.Controls.Add(spin, 1, 4);

        var flags = new FlowLayoutPanel { Dock = DockStyle.Fill, FlowDirection = FlowDirection.LeftToRight, AutoSize = true };
        flags.Controls.Add(showClock);
        flags.Controls.Add(dayNight);
        table.Controls.Add(new Label { Text = "Options", TextAlign = ContentAlignment.MiddleLeft, Dock = DockStyle.Fill }, 0, 5);
        table.Controls.Add(flags, 1, 5);

        var openFolder = new Button { Text = "Open install folder", AutoSize = true };
        openFolder.Click += (_, _) =>
        {
            var folder = AppContext.BaseDirectory;
            Process.Start(new ProcessStartInfo { FileName = folder, UseShellExecute = true });
        };

        var save = new Button { Text = "Save", AutoSize = true };
        save.Click += (_, _) =>
        {
            var newSettings = new ScreensaverSettings
            {
                DataSource = ((ComboItem?)dataSource.SelectedItem)?.Value ?? "live",
                Projection = ((ComboItem?)projection.SelectedItem)?.Value ?? "orthographic",
                Overlay = ((ComboItem?)overlay.SelectedItem)?.Value ?? "wind",
                Height = ((ComboItem?)height.SelectedItem)?.Value ?? "level",
                SpinSpeed = (int)spin.Value,
                ShowClock = showClock.Checked,
                DayNight = dayNight.Checked
            };
            SettingsStore.Save(newSettings);
            Close();
        };

        var close = new Button { Text = "Close", AutoSize = true };
        close.Click += (_, _) => Close();

        var buttons = new FlowLayoutPanel
        {
            Dock = DockStyle.Bottom,
            FlowDirection = FlowDirection.RightToLeft,
            Padding = new Padding(12),
            Height = 60
        };
        buttons.Controls.Add(close);
        buttons.Controls.Add(save);
        buttons.Controls.Add(openFolder);

        ClientSize = new Size(640, 340);
        Controls.Add(info);
        Controls.Add(table);
        Controls.Add(buttons);
    }

    private sealed record ComboItem(string Label, string Value)
    {
        public override string ToString() => Label;
    }

    private static int? FindIndex(ComboBox combo, string value)
    {
        for (var i = 0; i < combo.Items.Count; i++)
        {
            if (combo.Items[i] is ComboItem item && string.Equals(item.Value, value, StringComparison.OrdinalIgnoreCase))
            {
                return i;
            }
        }
        return null;
    }
}

