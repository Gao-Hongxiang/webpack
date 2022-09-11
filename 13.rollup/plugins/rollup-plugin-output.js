

function output(pluginOptions) {
  return {
    name: 'output',//插件的名字
    outputOptions(outputOptions) {
      console.log('outputOptions');
    },
    async renderStart(outputOptions, inputOptions) {
      console.log('renderStart');
    },
    async banner() {
      return '//banner';
    },
    async footer() {
      return '//footer';
    },
    async intro() {
      return '//intro';
    },
    async outro() {
      return '//outro';
    },
    /*  renderDynamicImport() {
       return {
         left: "import(",
         right: ")"
       }
     }, */
    //此钩子是为不多的同步钩子,不能加async 
    renderDynamicImport() {
      return {
        left: "dynamicImportPolyfill(",
        right: ",import.meta.url)"
      }
    },
    augmentChunkHash(chunkInfo) {
      console.log('chunkInfo');
      //console.log('chunkInfo', chunkInfo);
      return Date.now();
    },
    resolveId(source) {//原义是获取source对应的绝对路径,直接返回
      if (source === 'logger') {
        return source;
      }
    },
    load(importee) {
      if (importee === 'logger') {
        //发出一个包含在生成输出中的新文件，并返回一个referenceId，
        //该ID可在不同位置用于引用发出的文件
        const referenceId = this.emitFile({
          type: 'asset',
          source: 'console.log("LOGGER")',
          fileName: 'logger.js'
        });
        return `export default import.meta.ROLLUP_FILE_URL_${referenceId}`;
      }
    },
    resolveFileUrl({ chunkId, fileName }) {
      return `new URL('${fileName}',document.baseURI).href`;
    },
    resolveImportMeta(property) {
      console.log('resolveImportMeta', property);
      return '14';
    },
    renderChunk(code, chunk, options) {
      console.log('code');
    },
    //向输出目录里写入一个html文件进行预览
    generateBundle(options, bundle, isWrite) {
      let entryNames = [];
      for (let fileName in bundle) {
        let assetOrChunkInfo = bundle[fileName];
        if (assetOrChunkInfo.isEntry) {
          entryNames.push(fileName);
        }
      }
      this.emitFile({
        type: 'asset',
        fileName: 'index.html',
        source: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>rollup</title>
        </head>
        <body>
            ${entryNames.map(entryName => `
          <script src="${entryName}" type="module"></script>
          `)
          }
        </body>
        </html>
        `
      });
    },
    writeBundle() {
      console.log('writeBundle');
    },
    renderError() {
      console.log('renderError');
    },
    closeBundle() {
      console.log('closeBundle');
    }
  }
}

export default output;