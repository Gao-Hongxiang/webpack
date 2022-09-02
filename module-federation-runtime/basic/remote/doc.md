
- 1. 访问 http://127.0.0.1:8000   host\dist\index.html
- 2. 访问并执行 host\dist\main.js
- 3. 先异步加载 require.e("src_bootstrap_js") 代码块
- 4. 通过 require.f.j(chunkId)
  -  4.1 拼接出一个url地址 http://127.0.0.1:8000/src_bootstrap_js.js
  -  4.2 访问 host\dist\src_bootstrap_js.js
  -  4.3 执行self["webpackChunkhost"].push
  -  4.4 webpackJsonpCallback([chunkIds,moreModules])
  -  4.5 modules['./src/bootstrap.js'] = (module, exports, require) => {
    require.e("webpack_container_remote_remote_RemoteComponent").then(() => require("webpack/container/remote/remote/RemoteComponent")).then(result => {
      console.log(result.default);
    });
  - 4.6 加载 `./src/bootstrap.js`  
  - 4.7 require.e("webpack_container_remote_remote_RemoteComponent")
  - 4.8 先通过 webpack_container_remote_remote_RemoteComponent代码块名称获得模块ID`webpack/container/remote/remote/RemoteComponent`
  - 4.9 通过`idToExternalAndNameMapping`获得
  `["default", "./RemoteComponent", "webpack/container/reference/remote"]`
  - [ 共享作用域的名称，远程向外暴露的模块的别名, 远程容器模块，指的就是remote]
  - 4.10 加载远程`webpack/container/reference/remote`


