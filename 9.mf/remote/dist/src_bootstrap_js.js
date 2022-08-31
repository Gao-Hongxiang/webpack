"use strict";
(self["webpackChunkremote"] = self["webpackChunkremote"] || []).push([["src_bootstrap_js"], {
  "./src/App.js": (module, exports, require) => {
    require.r(exports);
    require.d(exports, {
      "default": () => _DEFAULT_EXPORT__
    });
    var react_0__ = require("./node_modules/react/index.js");
    var react_0___default = require.n(react_0__);
    var _NewsList_1__ = require("./src/NewsList.js");
    var lodash_2__ = require("./node_modules/lodash/lodash.js");
    var lodash_2___default = require.n(lodash_2__);
    console.log(lodash_2___default());
    const RemoteSliders = react_0___default().lazy(() => Promise.resolve().then(function webpackMissingModule() {
      var e = new Error("Cannot find module 'host/Sliders'");
      e.code = 'MODULE_NOT_FOUND';
      throw e;
    }));
    const App = () => {
      return react_0___default().createElement("div", null, react_0___default().createElement("h2", null, "\u672C\u5730\u7EC4\u4EF6NewsList"), react_0___default().createElement(_NewsList_1__["default"], null), react_0___default().createElement("h2", null, "\u8FDC\u7A0B\u7EC4\u4EF6RemoteSliders"), react_0___default().createElement(react_0___default().Suspense, {
        fallback: "loading NewsList"
      }, react_0___default().createElement(RemoteSliders, null)));
    };
    const _DEFAULT_EXPORT__ = App;
  },
  "./src/NewsList.js": (module, exports, require) => {
    require.r(exports);
    require.d(exports, {
      "default": () => _DEFAULT_EXPORT__
    });
    var react_0__ = require("./node_modules/react/index.js");
    var react_0___default = require.n(react_0__);
    const _DEFAULT_EXPORT__ = () => react_0___default().createElement("div", null, "NewsList");
  },
  "./src/bootstrap.js": (module, exports, require) => {
    require.r(exports);
    var react_0__ = require("./node_modules/react/index.js");
    var react_0___default = require.n(react_0__);
    var react_dom_client_1__ = require("./node_modules/react-dom/client.js");
    var _App_2__ = require("./src/App.js");
    (0, react_dom_client_1__.createRoot)(document.getElementById('root')).render(react_0___default().createElement(_App_2__["default"], null));
  }
}]);