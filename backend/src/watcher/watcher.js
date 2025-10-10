// filewatcher.js
const chokidar = require('chokidar');
const path = require('path');
const parseRaceJSON = require('../services/parseRaceJSON'); // make sure parser.js exports a function

// Directory to watch
const WATCH_DIR = path.join(__dirname, './'); // change 'watched' to your folder

// Initialize watcher
const watcher = chokidar.watch(WATCH_DIR, {
  persistent: true,
  ignoreInitial: true, // ignore files already in the directory
  depth: 0, // only watch this directory, not subfolders
});

watcher.on('add', (filePath) => {
  console.log(`New file detected: ${filePath}`);
  try {
    parseRaceJSON(filePath); // send the new file to parser
  } catch (err) {
    console.error(`Error parsing file ${filePath}:`, err);
  }
});

watcher.on('error', (error) => {
  console.error('Watcher error:', error);
});

console.log(`Watching for new files in ${WATCH_DIR}...`);
