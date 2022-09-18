
const resolvePlugin = require('./resolve');
async function resolvePlugins(config) {
  //现在此处返回的是vite的内置插件
  return [
    resolvePlugin(config)
  ]
}
exports.resolvePlugins = resolvePlugins;