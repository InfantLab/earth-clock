#!/bin/sh
# Start script for earth-clock
# Runs a single Node process (server.js), which starts background services internally.

echo "Starting earth-clock server (includes data updaters)..."
exec node server.js

