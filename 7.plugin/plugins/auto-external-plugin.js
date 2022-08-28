

class AutoExternalPlugin{
  constructor() {
    this.importedModules = new Set();
  }
  apply(compiler) {
    //获取到普通模块工厂,此工厂在Compiler创建的时候就直接创建好了。
    //饭店=Compiler 招聘一个厨师 normalModuleFactory
    //每当接到订单，顾客点个蛋炒饭，或者说创建一个模块，会由厨师normalModuleFactory创建这个模块
    compiler.hooks.normalModuleFactory.tap('AutoExternalPlugin', (normalModuleFactory) => {
      //模块工厂会负责创建模块，创建完模块要编译模块，就是把模块源码转成语法树AST，然后遍历语法树找依赖
      //在遍历语法的时候，遇到不同的点节会触发不同的事件
      normalModuleFactory.hooks.parser
        .for('javascript/auto')
        .tap('AutoExternalPlugin', (parser) => {
          parser.hooks.import.tap('AutoExternalPlugin', (statement, source) => {
            this.importedModules.add(source);
          });
          //call是一个hookMap {key:Hook} 判断call这个hookMap里有没有require这个key对应的hook,如果有返回，没有则创建再返回
          parser.hooks.call.for('require').tap('AutoExternalPlugin', (expression) => {
            const source = expression.arguments[0].value;
            this.importedModules.add(source);
          });
      })
    })
    setTimeout(() => {
      console.log(this.importedModules);
    },3000);
  }
}
module.exports = AutoExternalPlugin;
/**
 * 实现思路 
 * 1.找到本项目中的所有依赖的模块，看看哪些在AutoExternalPlugin配置了
 * 也就是说看看项目里有没有使用jquery和lodash
 * 因为用到了才需要处理为外部模块，如果没有用过就不需要任何处理
 * 2.如何找本项目依赖了哪些模块?
 * import 'lodash'
 * require('query'); callExpression
 * 所以我要找项目中的import和require语句，或者说节点
 * Compiler=>NormalModuleFactory=>Parser=>import/require
 */