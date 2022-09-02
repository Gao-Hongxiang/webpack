const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
  mode: 'development',
  devtool: false,
  entry: './src/index.js',
  output: {
    //publicPath: 'http://localhost:3000'
    //publicPath: '/'
    //publicPath: ''
  },
  devServer: {
    port: 8000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new ModuleFederationPlugin({
      //远程引用的应用名及其别名的映射，使用时以key值作为name
      remotes: {
        remote: 'remote@http://127.0.0.1:3000/remoteEntry.js'//被远程引用时可暴露的资源路径及其别名
      }
    })
  ]
}