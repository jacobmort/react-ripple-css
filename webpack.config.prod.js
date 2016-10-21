var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: './build',
    filename: 'build.js',
    libraryTarget: "umd"
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
