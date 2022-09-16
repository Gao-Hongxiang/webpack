
const connect = require('connect');
const serveStaticMiddleware = require('./middlewares/static');
const resolveConfig = require('../config');
const { createOptimizeDepsRun } = require('../optimizer');
async function createServer() {
  const config = await resolveConfig();
  const middlewares = connect();
  middlewares.use(serveStaticMiddleware(config));
  const server = {
    async listen(port, callback) {
      //在项目启动前进行依赖的预构建
      //1.找到本项目依赖的第三方模块
      await runOptimize(config);
      require('http')
        .createServer(middlewares)
        .listen(port, callback)
    }
  }
  return server;
}
async function runOptimize(config) {
  await createOptimizeDepsRun(config);
}
exports.createServer = createServer;