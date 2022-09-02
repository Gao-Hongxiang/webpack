"use strict";
(self["webpackChunkremote"] = self["webpackChunkremote"] || []).push([["src_bootstrap_js"], {
  "./src/RemoteComponent.js": (module, exports, require) => {
    require.r(exports);
    require.d(exports, {
      "default": () => _DEFAULT_EXPORT__
    });
    const _DEFAULT_EXPORT__ = 'RemoteComponent';
  },
  "./src/bootstrap.js": (module, exports, require) => {
    require.r(exports);
    var _RemoteComponent_0__ = require("./src/RemoteComponent.js");
    var check_is_array_1__ = require("webpack/sharing/consume/default/check-is-array/check-is-array");
    var check_is_array_1___default = require.n(check_is_array_1__);
    console.log(_RemoteComponent_0__["default"], check_is_array_1___default());
  }
}]);