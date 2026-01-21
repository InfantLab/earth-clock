namespace EarthClock.Screensaver;

internal sealed class InputExitMessageFilter : IMessageFilter
{
    // https://learn.microsoft.com/windows/win32/winmsg/about-messages-and-message-queues
    private const int WM_MOUSEMOVE = 0x0200;
    private const int WM_LBUTTONDOWN = 0x0201;
    private const int WM_RBUTTONDOWN = 0x0204;
    private const int WM_MBUTTONDOWN = 0x0207;
    private const int WM_KEYDOWN = 0x0100;
    private const int WM_SYSKEYDOWN = 0x0104;

    private readonly Action _exit;
    private readonly int _mouseMoveThresholdPx;
    private Point? _initialMousePos;

    public InputExitMessageFilter(Action exit, int mouseMoveThresholdPx = 8)
    {
        _exit = exit;
        _mouseMoveThresholdPx = Math.Max(0, mouseMoveThresholdPx);
    }

    public bool PreFilterMessage(ref Message m)
    {
        switch (m.Msg)
        {
            case WM_KEYDOWN:
            case WM_SYSKEYDOWN:
            case WM_LBUTTONDOWN:
            case WM_RBUTTONDOWN:
            case WM_MBUTTONDOWN:
                _exit();
                break;
            case WM_MOUSEMOVE:
                var pos = Control.MousePosition;
                if (_initialMousePos is null)
                {
                    _initialMousePos = pos;
                }
                else
                {
                    var dx = Math.Abs(pos.X - _initialMousePos.Value.X);
                    var dy = Math.Abs(pos.Y - _initialMousePos.Value.Y);
                    if (dx > _mouseMoveThresholdPx || dy > _mouseMoveThresholdPx)
                    {
                        _exit();
                    }
                }
                break;
        }

        return false;
    }
}

