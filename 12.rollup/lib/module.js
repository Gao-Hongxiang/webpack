const MagicString = require('magic-string');
const { parse } = require('acorn')
const analyse = require('./ast/analyse');
class Module {
  constructor({ code, path, bundle }) {
    this.code = new MagicString(code);
    this.path = path;
    this.bundle = bundle;
    //先获取语法树
    this.ast = parse(code, {
      ecmaVersion: 8,
      sourceType: 'module'
    });
    //存放本模块内导入了哪些变量 main.js中导入了name和age变量
    this.imports = {};
    //存放本模块中导出了哪些变量 msg.js导出了name和age两个变量
    this.exports = {};
    //存放本模块的顶级变量的定义语义是哪条
    //只存放本模块内定义的顶级变量
    this.definitions = {}
    //分析语法树
    analyse(this.ast, this.code, this);
  }
  expandAllStatements() {
    let allStatements = [];
    this.ast.body.forEach(statement => {
      let statements = this.expandStatement(statement);
      allStatements.push(...statements);
    });
    return allStatements;
  }
  expandStatement(statement) {
    statement._included = true;
    let result = [];
    result.push(statement);
    return result;
  }
}
module.exports = Module;