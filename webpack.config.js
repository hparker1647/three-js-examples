const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js'
  },
  devServer: {
    static: {
      directory: path.resolve('./dist')
    },
    compress: true,
    port: 1234
  },
  devtool: 'source-map',
  target: 'web',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.js' ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    })
  ]
}
