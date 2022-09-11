

function build(pluginOptions) {
  return {
    name: 'build',//插件的名字
    /**
     *  acorn, acornInjectPlugins, cache, context, experimentalCacheExpiry, external, inlineDynamicImports, input, makeAbsoluteExternalsRelative, manualChunks, maxParallelFileOps, maxParallelFileReads, moduleContext, onwarn, perf, plugins, preserveEntrySignatures, preserveModules, preserveSymlinks, shimMissingExports, strictDeprecations, treeshake, watch
     */
    async options(inputOptions) {
      console.log('options');
      //此钩子一般不使用 因为它是在汇总配置之前执行的
      return { ...inputOptions };
    },
    async buildStart(inputOptions) {
      //如果你想读取所有的插件的配置内容的汇总，需要buildStart
      console.log('buildStart');
      //inputOptions.input = ['./src/index2.js']
    },
    async resolveId(source, importer) {
      console.log('resolveId', source);
    },
    async load(id) {
      console.log('load');
    },
    async shouldTransformCachedModule({ id, code }) {
      console.log('shouldTransformCachedModule', id);
      return false;//每次从缓存在加载都需要重新转换
    },
    async transform(code, id) {
      console.log('transform');
    },
    async moduleParsed(moduleInfo) {
      console.log('moduleInfo');
    },
    async resolveDynamicImport(specifier, importer) {
      console.log('resolveDynamicImport', specifier, importer);
      //return { id: 'C:/aproject/webpack202208/13.rollup/src/msg.js' };
    },
    async buildEnd() {
      console.log('buildEnd');
    }
  }
}

export default build;