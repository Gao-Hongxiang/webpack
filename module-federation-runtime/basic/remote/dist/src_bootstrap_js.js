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
    var RemoteComponent = require("./src/RemoteComponent.js");
    console.log(RemoteComponent.default);
  }
}]);