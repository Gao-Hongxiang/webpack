const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: false,
  output: {
    //写入的目录
    //C:\aproject\webpack202208\1.usage\dist
    path: path.resolve(__dirname, 'dist'),
    //写入的文件名
    filename: "main.js"
  },
  devServer: {
    port: 8080,
    open: true,
    static: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        //最右侧的loader读的是源文件内容 最左侧的loader一定会返回一个js模块
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.png$/,//会把png图片自动拷贝到输出目录中，并返回新路径或者说名称
        //use:["file-loader"],
        type: 'asset/resource'
      },
      {
        test: /\.ico$/,//会把ico文件变成base64字符串并返回给调用者
        //use:["url-loader"],
        type: 'asset/inline'
      },
      {
        test: /\.txt$/,//会把txt内容直接返回
        //use:["raw-loader"],
        type: 'asset/source'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new webpack.DefinePlugin({
      //'process.env.NODE_ENV': process.env.NODE_ENV
    })
  ]
}