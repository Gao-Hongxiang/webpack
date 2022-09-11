

function build(pluginOptions) {
  return {
    name: 'build',//插件的名字
    /**
     *  acorn, acornInjectPlugins, cache, context, experimentalCacheExpiry, external, inlineDynamicImports, input, makeAbsoluteExternalsRelative, manualChunks, maxParallelFileOps, maxParallelFileReads, moduleContext, onwarn, perf, plugins, preserveEntrySignatures, preserveModules, preserveSymlinks, shimMissingExports, strictDeprecations, treeshake, watch
     */
    async options(inputOptions) {
      console.log('options');
      //此钩子一般不使用 因为它是在汇总配置之前执行的
      return { ...inputOptions, extValue: 'value' };
    },
    async buildStart(inputOptions) {
      //如果你想读取所有的插件的配置内容的汇总，需要buildStart
      console.log('buildStart', inputOptions);
      console.log(inputOptions);
      //inputOptions.input = ['./src/index2.js']
    },
    async resolveId(source, importer) {
      console.log(source, importer);
    },
    async load(id) {
      console.log('load', id);
    },
    async shouldTransformCachedModule({ id, code }) {
      console.log('shouldTransformCachedModule', code, id);
    },
    async transform(code, id) {
      console.log('transform', code, id);
    },
    async moduleParsed(moduleInfo) {
      console.log('moduleInfo', moduleInfo);
    },
    async resolveDynamicImport(specifier, importer) {
      console.log('resolveDynamicImport', specifier, importer);
    },
    async buildEnd() {
      console.log('buildEnd');
    }
  }
}

export default build;