(self["webpackChunkhost"] = self["webpackChunkhost"] || []).push([["src_bootstrap_js"], {
  "./src/bootstrap.js": (module, exports, require) => {
    require.r(exports);
    var check_is_array_0__ = require("webpack/sharing/consume/default/check-is-array/check-is-array");
    var check_is_array_0___default = require.n(check_is_array_0__);
    require.e("webpack_container_remote_remote_RemoteComponent").then(() => require("webpack/container/remote/remote/RemoteComponent")).then(result => {
      console.log(result.default, check_is_array_0___default());
    });
  }
}]);