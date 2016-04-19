const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/client/dev/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './client/dev/src/index.js'
  ],

  module: {
    loaders: [{
      include: __dirname + '/client/dev',
      loader: 'babel-loader',
      test: /\.js$/
    }]
  },

  output: {
    filename: 'appBundle.js',
    path: __dirname + '/client/dist'
  },

  plugins: [
    HtmlWebpackPluginConfig
  ]
};
