(self["webpackChunkhost"] = self["webpackChunkhost"] || []).push([["src_bootstrap_js"], {
  "./src/bootstrap.js": (module, exports, require) => {
    require.e("webpack_container_remote_remote_RemoteComponent").then(() => require("webpack/container/remote/remote/RemoteComponent")).then(result => {
      console.log(result.default);
    });
  }
}]);