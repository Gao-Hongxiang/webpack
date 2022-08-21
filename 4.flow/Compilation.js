const path = require('path')
const fs = require('fs');
const baseDir = normalizePath(process.cwd());
function normalizePath(path) {
  return path.replace(/\\/g,'/');
}
class Compilation{
  constructor(options,compiler) {
    this.options = options;
    this.compiler = compiler;
    this.modules = [];//这里放置本次编译涉及的所有的模块
    this.chunks = [];//本次编译所组装出的代码块
    this.assets = {};//key是文件名,值是文件内容
    this.files = [];//代表本次打包出来的文件
    this.fileDependencies = [];//本次编译依赖的文件或者说模块
  }
  build(callback) {
    //5.根据配置中的entry找出入口文件
    let entry = {};
    if (typeof this.options.entry === 'string') {
      entry.main = this.options.entry;
    } else {
      entry = this.options.entry;
    }
    for (let entryName in entry) {
      let entryFilePath = path.posix.join(baseDir, entry[entryName]);
      this.fileDependencies.push(entryFilePath)
    }
    console.log(this.fileDependencies);
    callback(null, {
      modules: this.modules,
      chunks: this.chunks,
      assets: this.assets,
      files: this.files,
    },this.fileDependencies);
  }
}
module.exports = Compilation;