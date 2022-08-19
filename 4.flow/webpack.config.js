const path = require('path');
const Run1Plugin = require('./plugins/run1-plugin');
const Run2Plugin = require('./plugins/run2-plugin');
const DonePlugin = require('./plugins/done-plugin');
module.exports = {
  mode: 'development',
  devtool:false,
  entry: {
    //chunk的名称  值是入口模块的路径
    main:'./src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename:'xxx.js'
  },
  module: {
    rules: [
      {
        test: /\.baxx$/,
        use: [
          //最左则的loader需要返回合法的JS
          path.resolve(__dirname, 'loaders/loader2.js'),
          //最右侧的loader拿到的是源代码
          path.resolve(__dirname, 'loaders/loader1.js')
        ]
      }
    ]
  },
  plugins: [
    //插件的挂载或者说监听是在编译启动前全部挂载的
    new DonePlugin(),
    new Run2Plugin(),
    new Run1Plugin(),
   ]
}