const fs = require('fs');
const path = require('path');
const paths = require('react-app-rewired/scripts/utils/paths');
const scriptVersion = paths.scriptVersion;
const scriptVersionPaths = require.resolve(scriptVersion + '/config/paths')
const scriptPaths = require(scriptVersionPaths);
const buildPath = scriptPaths.appBuild;

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = function (output) {  
  return function (config, env) {
    if (env !== 'production')  return config;
    scriptPaths.appBuild = output ? resolveApp(output) : buildPath;
    require.cache[scriptVersionPaths].exports = scriptPaths;
    config.output.path = scriptPaths.appBuild;
    return config;
  }
}