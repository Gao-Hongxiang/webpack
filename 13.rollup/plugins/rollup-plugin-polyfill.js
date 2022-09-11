const PROXY_SUFFIX = '?inject-polyfill';
const POLYFILL_ID = '\0polyfill';
function polyfill() {
  return {
    name: 'inject-polyfill',//插件的名字
    async resolveId(source, importer, options) {
      if (source === POLYFILL_ID) {
        return { id: POLYFILL_ID, moduleSideEffects: true };
      }
      if (options.isEntry) {//说明这是一个入口点
        //PluginContext.resolve将导入解析为模块ID（即文件名）
        //查找模块块的ID或者说文件名或者说此模块的文件的绝对路径
        const resolution = await this.resolve(source, importer, { skipSelf: true, ...options });
        //如果此模块无法解析，或者是外部模块,要以直接返回，rollup会报错或进行external提示
        if (!resolution || resolution.external) {
          return resolution;
        }
        //加载模块内容
        //1.读取模块内容 触发load钩子 2.转换模块内容 触发transform钩子 3.模块解析 ast 分析ast, moduleParsed
        //因为我们想把这个模块设置为有副作用,不要实现tree shaking
        //PluginContext.load的一个方法,内部会负责读取文件,
        //1.读取文件 的时候会触发load这个钩子
        //2.转换文件内容 触发transform这个钩子
        //3.AST语法解析找import依赖  触发moduleParsed这个钩子
        const moduleInfo = await this.loadModuleInfo(resolution)
        //表示此模块有副作用,不要tree shaking
        moduleInfo.moduleSideEffects = true;
        //C:\\aproject\\webpack202208\\13.rollup\\src\\index.js?inject-polyfill
        return `${resolution.id}${PROXY_SUFFIX}`;
      }
      return null;
    },
    //这是插件时的一个钩子
    load(id) {//读取模块的内容 默认行为是读硬盘上的文件
      if (id === POLYFILL_ID) {
        return `console.log('腻子代码')`;
      }
      //如果是一个需要代理的入口,特殊 处理 下,生成一个中间的代理模块
      if (id.endsWith(PROXY_SUFFIX)) {
        //C:\\aproject\\webpack202208\\13.rollup\\src\\index.js
        const entryId = id.slice(0, -PROXY_SUFFIX.length);
        let code = `
            import ${JSON.stringify(POLYFILL_ID)};
            import ${JSON.stringify(entryId)}
        `;
        //如果钩子有返回值了,不去走后面的load钩子了,也不会读硬盘上的文件了 webpack loader pitch
        return code;
      }
      return null;
    }
  }
}
/* 
let plugins = [{
  name: 'plugin1',
  resolveId: (source, importer) => {
    resolve()
  }
}, { resolveId: (source, importer) => 'yyy' }]
function resolve(source, importer, options) {
  //在resolve的过程 也会遍历所有的插件的resolveId方法
  let resolution;
  for (let i = 0; i < plugins.length; i++) {
    if (options.skipSelf && plugins[i].name === 'plugin1') continue;
    const resolveId = plugins[i].resolveId;
    if (resolveId) {
      resolution = resolveId(source, importer);
      if (resolution) return resolution;
    }
  }
  return { id: path.resolve(path.dirname(importer), source) };
} */

export default polyfill;

/**
 * resolveId 查找引入的模块的绝对路径
 * entry  ./src/index.js
 * 
 * resolution
  {
    external: false,//是否是外部模块
    id: 'C:\\aproject\\webpack202208\\13.rollup\\src\\index.js',//此模块的绝对路径
    moduleSideEffects: true,//模块是否有副作用，有副作用的话禁 用tree shaking 
  }

  https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency
check-is-array (imported by src/index.js)
  默认情况下,rollup只认相对路径，不认识第三方模块。如果遇到第三方模块，会认为是外部依赖

  webpack  
  load=读取模块内容 
  transform 转换模块内容 类似于webpack里的loader
  moduleParsed 把内容转成AST并解析import依赖
 */