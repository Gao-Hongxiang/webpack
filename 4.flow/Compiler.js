const { SyncHook } = require('tapable');
const Compilation = require('./Compilation');
const fs = require('fs');
class Compiler{
  constructor(options) {
    this.options = options;
    this.hooks = {
      run: new SyncHook(),//在开始编译之前调用
      done:new SyncHook() //在编译完成时执行
    }
  }
  run(callback) {
    this.hooks.run.call();//在编译开始前触发run钩子执行
    //在编译的过程中会收集所有的依赖的模块或者说文件
    //stats指的是统计信息 modules chunks  files=bundle assets指的是文件名和文件内容的映射关系
    const onCompiled = (err, stats, fileDependencies) => {
      callback(err,{toJson:()=>stats});
      fileDependencies.forEach(fileDependency => {
        //监听依赖的文件变化，如果依赖的文件变化后会开始一次新的编译
        fs.watch(fileDependency,()=>this.compile(onCompiled));
      });
      this.hooks.done.call();//在编译完成时触发done钩子执行
    }
    //调用compile方法进行编译
    this.compile(onCompiled);
  }
  //开启一次新的编译
  compile(callback) {
    //每次编译 都会创建一个新的Compilation实例
    let compilation = new Compilation(this.options,this);
    compilation.build(callback);
  }
}
module.exports = Compiler;