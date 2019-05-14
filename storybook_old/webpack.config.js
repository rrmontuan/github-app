'use strict'

const webpackConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js')

module.exports = function(config, env) {
  const newConfig = webpackConfig(config, env)

  newConfig.module.preLoaders = (newConfig.module.preLoaders || []).concat({
    teste: /\.js$/,
    exclude: /node_modules/,
    include: /src/,
    loader: 'standard'
  })
  
  return newConfig
}

