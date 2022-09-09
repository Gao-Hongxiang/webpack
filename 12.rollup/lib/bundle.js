const path = require('path');
const fs = require('fs');
const MagicString = require('magic-string');
const Module = require('./module');
class Bundle {
  constructor(options) {
    //入口文件的绝对路径
    this.entryPath = path.resolve(options.entry.replace(/\.js$/, '') + '.js');
    this.modules = new Set();
  }
  build(output) {
    const entryModule = this.fetchModule(this.entryPath);
    this.statements = entryModule.expandAllStatements();
    const { code } = this.generate();
    fs.writeFileSync(output, code);
  }
  generate() {
    let bundle = new MagicString.Bundle();
    this.statements.forEach(statement => {
      const source = statement._source.clone();
      if (statement.type === 'ExportNamedDeclaration') {
        source.remove(statement.start, statement.declaration.start)
      }
      //把每个语句对应的源代码都添加bundle实例中
      bundle.addSource({
        content: source,
        separator: '\n'
      });
    });
    //返回合并后的源代码
    return { code: bundle.toString() };
  }
  /**
   * 创建模块实例
   * @param {*} importee 被引入的模块 ./msg.js
   * @param {*} importer 引入别的模块的模块 main.js
   * @returns 
   */
  fetchModule(importee, importer) {
    let route;
    if (!importer) {
      route = importee;
    } else {
      if (path.isAbsolute(importee)) {
        route = importee.replace(/\.js$/, '') + '.js';
      } else {
        route = path.resolve(path.dirname(importer),
          importee.replace(/\.js$/, '') + '.js')
      }
    }
    if (route) {
      //读取文件对应的内容
      const code = fs.readFileSync(route, 'utf8');
      //创建一个模块的实例
      const module = new Module({
        code,//模块的源代码
        path: route,//模块的路径
        bundle: this//Bundle实例
      });
      this.modules.add(module);
      return module;
    }
  }
}
module.exports = Bundle;
/**
 * rollup  Bundle = webpack.Compiler
 * rollup file module   = webpack file module  
 */