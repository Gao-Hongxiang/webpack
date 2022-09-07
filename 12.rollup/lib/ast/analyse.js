/**
 * 分析模块对应的AST语法树
 * @param {*} ast 语法树
 * @param {*} code 源代码
 * @param {*} module 模块实例
 */
function analyse(ast, code, module) {
  ast.body.forEach((statement) => {
    Object.defineProperties(statement, {
      _included: { value: false, writable: true },//表示这条语句默认不包括在输出结果里
      _module: { value: module },//指向它自己的模块
      //这是这个语句自己对应的源码
      _source: { value: code.snip(statement.start, statement.end) }
    });
  });
}
module.exports = analyse;