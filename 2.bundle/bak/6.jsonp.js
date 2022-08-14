debugger
var modules = {};
var cache = {};
function require(moduleId) {
  var cachedModule = cache[moduleId];
  if (cachedModule !== undefined) {
    return cachedModule.exports;
  }
  var module = cache[moduleId] = {
    exports: {}
  };
  modules[moduleId](module, module.exports, require);
  return module.exports;
}
require.d = (exports, definition) => {
  for (var key in definition) {
    if (require.o(definition, key) && !require.o(exports, key)) {
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: definition[key]
      });
    }
  }
};
require.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
require.r = exports => {
  if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
    Object.defineProperty(exports, Symbol.toStringTag, {
      value: 'Module'
    });
  }
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
};
function webpackJsonpCallback([chunkIds, moreModules]) {
  const resolves = [];
  for (let i = 0; i < chunkIds.length; i++){
    const chunkId = chunkIds[i];
    resolves.push(installedChunks[chunkId][0]);
    installedChunks[chunkId] = 0;
  }
  for (const moduleId in moreModules) {
    modules[moduleId]=moreModules[moduleId]
  }
  //依次取出promise的resolve方法，让它对应的promise变成成功态
  while (resolves.length) {
    resolves.shift()();
  }
}
//已经安装过的，或者说已经加载好的代码块 
//key是代码块的名字，值是代码块的状态
//main就是默认代码块的名称 0表示已经加载完成
var installedChunks = {
  main: 0,
  //当一个代码块它的值是一个数组的时候表示此代码块对应的JS文件正在加载中
  //'src_hello_js':[resolve,reject,promise]=>0
}
require.f = {}
require.p = '';//publicPath文件访问路径
require.u = (chunkId) => chunkId + '.js';
require.l = (url) => {
  let script = document.createElement('script');
  script.src = url;
  document.head.appendChild(script);
}
//jsonp 通过JSONP的方式加载chunkId对应的JS文件，生成一个promise放到promises数组里
require.f.j = (chunkId,promises) => {
  let installedChunkData;
  const promise = new Promise((resolve,reject) => {
    installedChunkData=installedChunks[chunkId]=[resolve,reject]
  });
  installedChunkData[2] = promise;
  //installedChunkData=[resolve,reject,promise]
  promises.push(promise);
  const url = require.p + require.u(chunkId);
  require.l(url);
}
require.e = (chunkId) => {
  let promises = [];
  require.f.j(chunkId, promises);
  return Promise.all(promises);
}
const chunkLoadingGlobal = window["webpackChunk_2_bundle"] = [];
chunkLoadingGlobal.push = webpackJsonpCallback;
require.e("src_hello_js").then(require.bind(require, "./src/hello.js")).then(result => {
  console.log(result.default);
});

//代码块其实就模块的集合