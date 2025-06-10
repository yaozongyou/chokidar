global.watcher = require('./index.js').default.watch('/home/richardyao/watch-root', {
    ignored: /node_modules|\.git/,
    persistent: true,
    // followSymlinks: false,
    // useFsEvents: false,
    // usePolling: false,
  })
  .on('all', (event, path) => { 
    console.log("event", event, "path", path); 
  })
  .on('ready', () => { 
    console.log('Ready'); 
  });
