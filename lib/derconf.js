// derconf

var fs = require('fs');
var _ = require('underscore');

var _default_dirs = {
  '*': [process.env.HOME + '/config.json', './config.json']
};

// loads a given file name from the listed search dirs
function load(searchDirs) {
  if (!searchDirs) {
    searchDirs = {};
  }
  var loaderInfo = _.defaults(searchDirs, _default_dirs);

  var searchPaths = loaderInfo['*'];

  if (loaderInfo[process.env.NODE_ENV]) {
    searchPaths = searchPaths.concat(loaderInfo[process.env.NODE_ENV]);
  } else {
    console.log('derconf: No config serach paths for: ' + process.env.NODE_ENV);
  }

  // the order of the search path determine the inportance
  // the last object will overwrite the first one for example
  var finalConfig = {};
  for (var i = 0; i < searchPaths.length; i++) {
    if (fs.existsSync(searchPaths[i])) {
      finalConfig = _.extend(finalConfig, require(searchPaths[i]));
    } else {
      console.warn('derconf: Config file does not exist: ' + searchPaths[i]);
    }
  }
  return finalConfig;
}
module.exports = load;