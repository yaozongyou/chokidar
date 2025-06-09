global.watcher = require('./index.js').default.watch('/home/richardyao/watch-root', {
    ignored: /node_modules|\.git/,
    persistent: true,
    // followSymlinks: false,
    // useFsEvents: false,
    // usePolling: false,
  })
  .on('all', (event, path) => { 
    console.log(event, path); 
    console.trace('aaaaaaaaaaaaaaaaaaaaaaaaaaa');
  })
  .on('ready', () => { 
    console.log('Ready'); 
  })
  //.on('raw', console.log.bind(console, 'Raw event:'))
  
