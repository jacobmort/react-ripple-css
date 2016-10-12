var webpack = require('webpack');

module.exports = {
  entry: './src/Ripple/Ripple.js',
  output: {
    path: './build',
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: ['style','css']
      }
    ]
  },
  externals: {
    "react": "react"
  }
}
