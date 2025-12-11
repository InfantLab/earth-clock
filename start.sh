#!/bin/sh
# Start script for earth-clock
# Runs weather service in background and web server in foreground

echo "Starting weather service..."
node weather-service.js &

echo "Starting web server..."
node server.js

