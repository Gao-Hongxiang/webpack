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
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new ModuleFederationPlugin({
      //远程引用的应用名及其别名的映射，使用时以key值作为name
      remotes: {
        remote: 'remote@http://localhost:3000/remoteEntry.js'//被远程引用时可暴露的资源路径及其别名
      },
      exposes: {
        './Sliders': './src/Sliders'
      },
      filename: 'remoteEntry.js',
      name: 'host',
      shared: {
        react: '^18.2.0',
        'react-dom': '^18.2.0'
      }
    })
  ]
}