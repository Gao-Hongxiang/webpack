const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const SpeedMeasureWebpackPlugin = require('speed-measure-webpack-plugin');
const { BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const smw = new SpeedMeasureWebpackPlugin();
//const bootstrap = path.resolve(__dirname,'node_modules/bootstrap/dist/css/bootstrap.css');
module.exports = smw.wrap({
  mode: 'development',
  devtool:false,
  entry: './src/index.js',
  output: {
    path: path.resolve('build'),
    filename: '[name].js',
    library: 'calculator',
    libraryExport:'add',
    libraryTarget:'commonjs2'
  },
  //配置如何查找源代码中引入的模块
  resolve: {
    extensions: ['.js'],
    alias: {
      //bootstrap
    },
    modules: ['mymodules', 'node_modules'],
    mainFields: ['style', 'main'],//指是查找package.json中的字段
    mainFiles:['index.js','base.js']
  },
  //指定如何查找loader
  resolveLoader: {
    extensions: ['.js'],
    alias: {
      //bootstrap
    },
    modules: ['loaders', 'node_modules']
  },
  module: {
    //一般来说我们拿到模块后要分析里面的依赖的模块import/require
    //些模块我们知道它肯定没有依赖别的模块 jquery lodash,所以可以省这一步
    noParse: /jquery|lodash/,
    noParse(request) {
      return /jquery|lodash/.test(request)
    },
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:'./src/index.html'
    }),
    new webpack.IgnorePlugin({
      contextRegExp: /moment$/,//目录的正则
      resourceRegExp:/locale/   //请求的正则
    }),
    //new BundleAnalyzerPlugin()
  ]
})