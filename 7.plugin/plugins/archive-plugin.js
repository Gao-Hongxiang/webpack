/**
 * 在编译完成后，希望把dist目录下所有的文件打在一个压缩包，保存到输出目录里
 */
const jszip = require('jszip');
const {RawSource } = require('webpack-sources');
class ArchivePlugin{
  apply(compiler) {
    compiler.hooks.compilation.tap('ArchivePlugin', (compilation) => {
      compilation.hooks.processAssets.tapAsync({ name: 'ArchivePlugin' }, (assets) => {
        const zip = new jszip();
        for (const pathname in assets) {
          const source = assets[pathname];
          const sourceCode = source.source();//返回源代码字符串
          zip.file(pathname,sourceCode);
        }
        return zip.generateAsync({ type: 'nodebuffer' }).then(content => {
          assets[`${Date.now()}.zip`] = new RawSource(content);
         /*  assets[`${Date.now()}.zip`] = {
            source() {
              return content;
            }
          } */
        });
      });
    });
  }
}
module.exports = ArchivePlugin;