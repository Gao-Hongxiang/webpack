const fs = require('fs');
/**
 * 转换请求 
 * @param {*} url 请求的的资源 /src/main.js
 * @param {*} server 
 */
async function transformRequest(url, server) {
  //resolveId 获取 /src/main.js的绝对路径
  const { pluginContainer } = server;
  //此处其实是调用lib\plugins\resolve.js里的resolveId方法返回绝对路径
  const { id } = pluginContainer.resolveId(url);
  console.log('id', id);

  //load //读取/src/main.js的内容
  //const code = pluginContainer.load(id);
  //transform /转换/src/main.js的内容 把vue=>vue.js
  //const result = pluginContainer.transform(code, id);
  return 'main';
}
module.exports = transformRequest;