const { init, parse } = require('es-module-lexer');
const MagicString = require('magic-string');
const { lexAcceptedHmrDeps } = require('../server/hmr');
function importAnalysis(config) {
  const { root } = config;
  let server;
  return {
    name: 'importAnalysis',
    configureServer(_server) {
      server = _server;
    },
    //1.找到源文件中第三方模块2.进行转换 vue=>deps/vue.js
    async transform(source, importer) {
      await init;//等待解析器初始化完成
      //获取导入的模块
      let imports = parse(source)[0];
      //如果没有导入任何模块，可以直接返回
      if (!imports.length) {
        return source;
      }
      const { moduleGraph } = server;
      //通过导入方的模块的路径获取模块的节点
      const importerModule = moduleGraph.getModuleById(importer);//main.js
      //此模块将要导入的子模块
      const importedUrls = new Set();//renderModule.js
      //接收变更的依赖模块
      const acceptedUrls = new Set();//renderModule.js
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
        await moduleGraph.ensureEntryFromUrl(url);//建立此导入的模块和模块节点的对应关系
        return url;
      }
      //重写路径
      for (let index = 0; index < imports.length; index++) {
        //n=specifier=vue
        const { s: start, e: end, n: specifier } = imports[index];//renderModule.js
        const rawUrl = source.slice(start, end);//原始的引入地址 import.meta
        if (rawUrl === 'import.meta') {
          //import.meta.hot.accept(['./renderModule.js']
          const prop = source.slice(end, end + 4);
          if (prop === '.hot') {
            if (source.slice(end + 4, end + 11) === '.accept') {
              lexAcceptedHmrDeps(source,
                source.indexOf('(', end + 11) + 1,
                acceptedUrls//此处存放的是原始的路径 相对的，也可能绝对的，也可以第三方的
              );
            }
          }
        }
        if (specifier) {
          const normalizedUrl = await normalizeUrl(specifier);
          if (specifier !== normalizedUrl) {
            ms.overwrite(start, end, normalizedUrl);
          }
          //把解析后的导入的模块ID添加到importedUrls
          importedUrls.add(normalizedUrl);
        }
      }
      const normalizedAcceptedUrls = new Set();
      for (const { url, start, end } of acceptedUrls) {
        const [rawUrl, normalized] = await moduleGraph.resolveUrl(url);
        normalizedAcceptedUrls.add(normalized);
        ms.overwrite(start, end, JSON.stringify(normalized));
      }
      //更新模块的依赖信息
      await moduleGraph.updateModuleInfo(
        importerModule,
        importedUrls,
        normalizedAcceptedUrls
      );
      return ms.toString();
    }
  }
}
module.exports = importAnalysis;