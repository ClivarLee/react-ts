const path = require('path');
const tsImportPluginFactory = require('ts-import-plugin');
const rewireHappypack = require('./rewire-happypack')
const { getLoader, compose } = require('react-app-rewired');
const rewireOutput = require('./rewire-output')
const rewireClientEnv = require('./rewire-client-env')
module.exports = {
  webpack (config, env) {

    const tsLoader = getLoader(
      config.module.rules, 
      rule => rule.loader &&
      typeof rule.loader === 'string' &&
      rule.loader.includes('ts-loader')
    )
    tsLoader.options = {
      transpileOnly: true,
      getCustomTransformers: () => ({
        before: [ tsImportPluginFactory({
          libraryName: 'antd',
          libraryDirectory: 'es',
          style: 'css',
        }) ]
      })
    }
    
    return compose(
      rewireOutput('dist'),
      rewireClientEnv({
        CLIENT_ENV: process.env.CLIENT_ENV
      })
    )(config, env)
  }
}