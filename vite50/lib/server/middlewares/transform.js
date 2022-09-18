const { isJSRequest } = require('../../utils');
const send = require('../send');
const transformRequest = require('../transformRequest');
function transformMiddleware(server) {
  return async function (req, res, next) {
    if (req.method !== 'GET') return next();
    debugger
    //获取路径名 /src/main.js?id=1#top pathname=/src/main.js query={id:1}
    //let pathname = parse(req.url).pathname;
    //如果请求的资源是JS的话，重写第三方模块的路径
    if (isJSRequest(req.url)) {
      //此处传的一定是req.url,如果只传pathname会丢失query.
      //而我们后面会写vue插件，会依赖查询参数
      const result = await transformRequest(req.url, server);
      if (result) {
        return send(req, res, result.code, 'js');
      } else {
        return next();
      }
    } else {
      return next();
    }
  }
}
module.exports = transformMiddleware;