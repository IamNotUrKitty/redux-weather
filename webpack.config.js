var ExtractTextPlugin = require('extract-text-webpack-plugin');
var stylusLoader = ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader');
var poststylus = require('poststylus');
var webpack = require('webpack');
module.exports = {
  entry: "./src/js/main.js",
  output: {
    filename: "public/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel'
      },
      {
        test: /\.styl$/,
        loader: stylusLoader
      }
    ]
  },
  stylus: {
    use: [
      poststylus([ 'autoprefixer'])
    ]
  },
  plugins: [
    new ExtractTextPlugin("public/style.css")
    //new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]
};