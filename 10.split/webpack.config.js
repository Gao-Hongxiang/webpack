const HtmlWebpackPlugin = require("html-webpack-plugin");
const PreloadWebpackPlugin = require('@vue/preload-webpack-plugin');
//const PreloadWebpackPlugin = require('./plugins/preload-webpack-plugin');
module.exports = {
  mode: 'development',
  devtool: false,
  //入口点分割，在设置entry的时候可以指定多个入口，每个入口文件和它依赖的模块都会成为一个代码块，分割成一个单独的文件
  //缺点 不够灵活 2.相同的依赖会打包多份
  entry: './src/index.js',
  output: {
    clean: true
  },
  /*  entry: {
     page1: './src/page1.js',
     page2: './src/page2.js'
   } */
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    //new PreloadWebpackPlugin()
  ]
}