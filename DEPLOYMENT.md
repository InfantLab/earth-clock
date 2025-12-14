# Deployment Guide for CapRover

This guide explains how to deploy earth-clock to CapRover at `earth-clock.onemonkey.org/`.

## Prerequisites

- CapRover instance running on your Hetzner server
- Git repository with earth-clock code
- Access to CapRover dashboard

## Deployment Steps

### 1. Prepare Your Repository

Ensure all files are committed and pushed to your Git repository:
- `Dockerfile`
- `server.js`
- `start.sh`
- `captain-definition`
- `.dockerignore`
- Updated `package.json`

### 2. Create New App in CapRover

1. Log into your CapRover dashboard
2. Go to "Apps" section
3. Click "One-Click Apps/Dockerfile" or "New App"
4. Enter app name: `earth-clock`
5. Click "Create New App"

### 3. Configure App Settings

#### Method A: Deploy from Git (Recommended)

1. In the app settings, go to "Deployment" tab
2. Select "Method 1: Deploy from GitHub/Bitbucket/GitLab"
3. Enter your repository URL
4. Select branch (usually `master` or `main`)
5. Click "Save & Update"

#### Method B: Deploy from Dockerfile

1. In the app settings, go to "Deployment" tab
2. Select "Method 2: Deploy from Dockerfile"
3. Upload or paste your `Dockerfile` and `captain-definition`
4. Click "Save & Update"

### 4. Set Environment Variables

In the app settings, go to "App Configs" → "Environment Variables" and add:

```
BASE_PATH=/earth-clock
```

**Note**: CapRover will automatically set the `PORT` environment variable, so you don't need to set it manually.

### 5. Configure Custom Domain/Path

1. Go to "HTTP Settings" tab
2. Under "Custom Domain", add your domain if needed
3. Under "Path Based Routing", configure:
   - **Path**: `/earth-clock`
   - **Forward to**: `earth-clock` (your app name)

Alternatively, if CapRover handles path routing automatically, you may need to configure this in the main CapRover settings under "HTTP Settings" → "Path Based Routing".

### 6. Deploy

1. Click "Save & Update" in the app settings
2. CapRover will build the Docker image and start the container
3. Monitor the logs in the "Logs" tab to ensure both services start correctly:
   - Weather service should start downloading GRIB2 data
   - Web server should start on the configured port

### 7. Verify Deployment

1. Visit `https://earth-clock.onemonkey.org/` in your browser
2. Check browser console for any 404 errors
3. Verify weather data loads (check Network tab for `/earth-clock/data/weather/current/` requests)
4. Verify day/night mask renders
5. Check that all assets (CSS, JS, images) load correctly

## Troubleshooting

### Assets Not Loading (404 errors)

- Verify `BASE_PATH` environment variable is set to `/earth-clock`
- Check that the base tag is being injected in HTML (view page source)
- Ensure CapRover path routing is configured correctly

### Weather Data Not Loading

- Check weather service logs in CapRover dashboard
- Verify `public/data/weather/current/` directory exists and is writable
- Check that GRIB2 downloads are succeeding (look for errors in logs)

### Port Conflicts

- CapRover automatically assigns ports, but if you see port conflicts, check the "Port Mapping" settings
- The app listens on the port specified by the `PORT` environment variable (set by CapRover)

### Base Path Issues

If the app doesn't work at `/earth-clock`:
1. Verify `BASE_PATH=/earth-clock` is set in environment variables
2. Check that `server.js` is correctly stripping the base path from requests
3. Ensure CapRover is forwarding requests with the full path (not stripping `/earth-clock`)

## Updating the App

To update the app after making changes:

1. Push changes to your Git repository
2. In CapRover, go to your app → "Deployment" tab
3. Click "Save & Update" to trigger a new deployment
4. CapRover will rebuild the Docker image and restart the container

## Monitoring

- **Logs**: View real-time logs in CapRover dashboard → App → "Logs" tab
- **Health**: Check app health in "Monitoring" tab
- **Resource Usage**: Monitor CPU/memory usage in "Monitoring" tab

## Separate Weather Service (Optional)

If you prefer to run the weather service as a separate app:

1. Create a second app: `earth-clock-weather`
2. Use a Dockerfile that only runs `weather-service.js`
3. Share the `public/data/weather/current/` directory via a volume or network storage
4. This provides better isolation but requires shared storage configuration

