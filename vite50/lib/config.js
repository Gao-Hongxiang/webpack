
const { normalizePath } = require('./utils');
async function resolveConfig() {
  //root指的是当前命令所在的目录，也就是根目录
  const root = normalizePath(process.cwd());//  __dirname
  const config = {
    root
  }
  return config;
}
module.exports = resolveConfig;