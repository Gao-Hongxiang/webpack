

function build() {
  return {
    name: 'build',
    async options() {
      console.log('options');
    },
    async buildStart() {
      console.log('buildStart');
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