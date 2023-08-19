var Module = {
  'locateFile': function(path) {
    console.log('locateFile');
    if (window.location.protocol.includes('https')) {
      const directory = window.location.pathname.split('/')[1];
      return '/' + directory + '/build/' + path;
    } else {
      return '/build/' + path;
    }
  }
};