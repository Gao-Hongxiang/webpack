const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackPreloadWebpackPlugin = require('webpackpreload-webpack-plugin');
const ImportPlugin = require('./plugins/ImportPlugin');
const AssetWebpackPlugin = require('./plugins/asset-webpack-plugin');
module.exports = {
  mode: 'development',
  devtool: false,
  //entry: './src/index.js',
  entry: {
    page1: './src/page1.js',
    page2: './src/page2.js',
    page3: './src/page3.js'
  },
  optimization: {
    //指定代码块的分割方式 表示选择哪些代码块进行分割，async initial all
    splitChunks: {
      chunks: 'all',
      //表示分割出去的代码块最小的体积 0就是不限制分割出去的代码块的体积
      minSize: 0,
      //表示在提取公共代码的时候，一个模块被多少个入口用入才会进行提取
      //minChunks: 2,
      //在以前是没有cacheGroups这个概念
      //默认情况下有二个缓存组 defaultVendors default
      cacheGroups: {
        //第三方
        //覆盖默认缓存组，因为我们有两个默认缓存组 defaultVendors,default
        defaultVendors: {
          test: /node_modules/,//如果模块的路径里有node_modules的话就属于这个vendor缓存组
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20
        },
        //因为自定义的缓存组优先级为0，默认缓存优先级肯定 要比自定义缓存低，所以必须为负数
        xxx: {
          test: /module1/, //priority:0
        }
      }
    }
  },
  output: {
    clean: true
  },
  module: {
    parser: {
      javascript: {
        dynamicImportPreload: true,
        dynamicImportPrefetch: true
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpackPreloadWebpackPlugin(),
    new ImportPlugin(),
    new AssetWebpackPlugin()
  ]
}