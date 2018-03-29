const { getLoader } = require('react-app-rewired');
const HappyPack = require('happypack');

module.exports = function (config, env) {
  const tsLoader = getLoader(
    config.module.rules, 
    rule => rule.loader &&
    typeof rule.loader === 'string' &&
    rule.loader.includes('ts-loader')
  );
  tsLoader.loader = 'happypack/loader';

  config.plugins.unshift(
    new HappyPack({
      threads: 4,
      loaders: [
        {
            path: 'ts-loader',
            query: { happyPackMode: true }
        }
      ]
    })
  );
  return config;
}