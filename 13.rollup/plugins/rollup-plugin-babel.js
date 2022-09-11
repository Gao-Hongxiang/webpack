import babel from '@babel/core';
import { createFilter } from 'rollup-pluginutils';
function babelPlugin(pluginOptions) {
  const { include, exclude, extensions = ['.js'] } = pluginOptions;
  //  (js|jsx|ts)$
  const extensionsRegExp = new RegExp(`(${extensions.join('|')})$`);
  const userDefinedFilter = createFilter(include, exclude);
  const filter = id => extensionsRegExp.test(id) && userDefinedFilter(id)
  return {
    name: 'babel',
    async transform(code, id) {//类似于webpack loader
      //如果过滤没有通过,就不需要任何处理
      if (!filter(id)) return null;
      return await babel.transformAsync(code, pluginOptions);
    }
  }
}
export default babelPlugin;


/* const userDefinedFilter = createFilter('./src', './src');
const result = userDefinedFilter('./src');
//exclude优先级更高
console.log('result', result); */