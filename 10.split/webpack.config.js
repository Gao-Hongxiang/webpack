const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackPreloadWebpackPlugin = require('webpackpreload-webpack-plugin');
const ImportPlugin = require('./plugins/ImportPlugin');
const AssetWebpackPlugin = require('./plugins/asset-webpack-plugin');
module.exports = {
  mode: 'development',
  devtool: false,
  //main是我们入口代码块的名称，至少会有一个main代码块，会有一个main.js文件
  entry: {
    main: './src/index.js'
  },
  /* entry: {
    page1: './src/page1.js',
    page2: './src/page2.js',
    page3: './src/page3.js'
  }, */
  optimization: {
    //指定代码块的分割方式 表示选择哪些代码块进行分割，async initial all
    splitChunks: {
      chunks: 'all',
      //表示分割出去的代码块最小的体积 0就是不限制分割出去的代码块的体积
      minSize: 0,
      //加载入口文件时，并行请求的最大数量 默认为5
      maxInitialRequests: 5,//一个代码最多拆成3个包 1+
      // page1 module1 module2 jquery
      //按需加载文件时，并行请求的最大数量 默认为3
      maxAsyncRequests: 3,
      //表示在提取公共代码的时候，一个模块被多少个入口用入才会进行提取
      //minChunks: 2,
      //在以前是没有cacheGroups这个概念
      //默认情况下有二个缓存组 defaultVendors default

      cacheGroups: {
        defaultVendors: false,
        default: false,
        xxx: {
          minChunks: 1,//按这个条件，如果一个模块被 引用了1次以上，就需要被 提取到单独的代码块中
          //需要把index.js提到到common代码块中，提取了以后main里就要删除index.js模块
          //最终会有两个代码块 1个是空的main,一个是包括index.js的common
          //重用现在的代码块 false 不重用
          //本来我要提取分割index.js,那么新分割出去的代码块里只有一个index.js
          //但是发现在现在main里也刚好有我想提取的代码块，直接把main当成分割出去代码复用
          reuseExistingChunk: true//如果能重用，就不会再生成一个新的common代码块了，直接重用main.js
        }
        //第三方
        //覆盖默认缓存组，因为我们有两个默认缓存组 defaultVendors,default
        /*  defaultVendors: {
           test: /node_modules/,//如果模块的路径里有node_modules的话就属于这个vendor缓存组
           priority: -10
         },
         default: {
           minChunks: 2,
           priority: -20
         } */
      }
    },
    //把运行时当成一个代码块进行单独提取
    //runtime 为了让打包后的代码在浏览器里能运行 模拟一个require方法 这个就叫运行
    //可以把runtimeChunk设置为true就可以把运行时代码块单独提取，实现长期缓存
    //因为运行时代码只是一个工具代码，跟业务无关，不管你的业务如何写，它始终不变
    //runtimeChunk: true
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
      template: './src/index.html',
      filename: 'page1.html',
      chunks: ['page1']//把page1和page1分拆出去的代码块生成的文件插入此模块
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'page2.html',
      chunks: ['page2']
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'page3.html',
      chunks: ['page3']
    }),
    new webpackPreloadWebpackPlugin(),
    new ImportPlugin(),
    new AssetWebpackPlugin()
  ]
}