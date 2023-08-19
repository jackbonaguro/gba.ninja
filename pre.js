console.log('Module', Module);
console.log('window.Module', window.Module);

Module['locateFile'] = function(path) {
  if (window.location.protocol.includes('https')) {
    const directory = window.location.pathname.split('/')[1];
    return '/' + directory + '/build/' + path;
  } else {
    return '/build/' + path;
  }
};

Module['onRuntimeInitialized'] = function() {
    window.emuLoaded = true;
    window.dispatchEvent(new Event('emuLoaded'));
};