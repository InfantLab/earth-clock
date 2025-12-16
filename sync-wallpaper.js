/**
 * Sync script to copy updated files from public/ to wallpaper-engine/
 * Run this after making changes to core earth.js code to keep versions in sync
 * 
 * Usage: node sync-wallpaper.js
 */

var fs = require('fs');
var path = require('path');

var filesToSync = [
    // Core earth library files
    'libs/earth/1.0.0/earth.js',
    'libs/earth/1.0.0/globes.js',
    'libs/earth/1.0.0/micro.js',
    'libs/earth/1.0.0/products.js',

    // Data files (optional - only if structure changed)
    // 'data/earth-topo.json',
    // 'data/earth-topo-mobile.json',

    // Styles (only if modified)
    // 'styles/styles.css',
];

var publicDir = path.join(__dirname, 'public');
var wallpaperDir = path.join(__dirname, 'wallpaper-engine');

console.log('Syncing files from public/ to wallpaper-engine/...');
console.log('');

var synced = 0;
var skipped = 0;
var errors = 0;

filesToSync.forEach(function (relativePath) {
    var sourcePath = path.join(publicDir, relativePath);
    var destPath = path.join(wallpaperDir, relativePath);
    var destDir = path.dirname(destPath);

    try {
        // Check if source exists
        if (!fs.existsSync(sourcePath)) {
            console.log('SKIP: ' + relativePath + ' (source not found)');
            skipped++;
            return;
        }

        // Create destination directory if needed
        if (!fs.existsSync(destDir)) {
            fs.mkdirSync(destDir, { recursive: true });
        }

        // Copy file
        fs.copyFileSync(sourcePath, destPath);
        console.log('SYNC: ' + relativePath);
        synced++;
    } catch (error) {
        console.error('ERROR: ' + relativePath + ' - ' + error.message);
        errors++;
    }
});

console.log('');
console.log('Sync complete:');
console.log('  Synced: ' + synced);
console.log('  Skipped: ' + skipped);
console.log('  Errors: ' + errors);

if (errors === 0) {
    console.log('');
    console.log('Next steps:');
    console.log('  1. Test wallpaper in Wallpaper Engine editor');
    console.log('  2. If working, update on Steam Workshop');
}
