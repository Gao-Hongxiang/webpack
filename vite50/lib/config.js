
const { normalizePath } = require('./utils');
const path = require('path');
async function resolveConfig() {
  //root指的是当前命令所在的目录，也就是根目录
  const root = normalizePath(process.cwd());//  __dirname
  const cacheDir = normalizePath(path.resolve(`node_modules/.vite50`));
  const config = {
    root,
    cacheDir
  }
  return config;
}
module.exports = resolveConfig;