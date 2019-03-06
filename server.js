'use strict'

const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config')

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: { colors: true },
  host: '0.0.0.0', // to accept connections from outside container
  watchOptions: {
    aggregateTimeout: 500, // Add a delay before rebuilding once the first file changed. This allows webpack to aggregate any other changes made during this time period into one rebuild. Pass a value in milliseconds
    poll: 1000 // Turn on polling by passing true, or specifying a poll interval in milliseconds
  }
}).listen(3000, (err) => {
  if (err) {
    return console.log(err)
  }

  console.log('Listening on http://localhost:3000')
})
