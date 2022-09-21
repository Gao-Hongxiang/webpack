const { init, parse } = require('es-module-lexer');
const MagicString = require('magic-string');
function importAnalysis(config) {
  const { root } = config;
  return {
    name: 'importAnalysis',
    //1.找到源文件中第三方模块2.进行转换 vue=>deps/vue.js
    async transform(source, importer) {
      debugger
      await init;//等待解析器初始化完成
      //获取导入的模块
      let imports = parse(source)[0];
      //如果没有导入任何模块，可以直接返回
      if (!imports.length) {
        return source;
      }
      const ms = new MagicString(source);
      //url= vue =>  /node_modules/.vite/deps/vue.js
      const normalizeUrl = async (url) => {
        //内部其实是调用插件容器的resolveId方法返回url的绝对路径
        const resolved = await this.resolve(url, importer);
        if (resolved && resolved.id.startsWith(root)) {
          //C:/vite50use/src/main.js=>/src/main.js
          //C:/vite50use/node_modules/.vite50/deps/vue.js
          // /node_modules/.vite50/deps/vue.js
          url = resolved.id.slice(root.length);
        }
        return url;
      }
      //重写路径
      for (let index = 0; index < imports.length; index++) {
        //n=specifier=vue
        const { s: start, e: end, n: specifier } = imports[index];
        if (specifier) {
          const normalizedUrl = await normalizeUrl(specifier);
          if (specifier !== normalizedUrl) {
            ms.overwrite(start, end, normalizedUrl);
          }
        }
      }
      return ms.toString();
    }
  }
}
module.exports = importAnalysis;