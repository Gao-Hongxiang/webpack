"use strict";
(self["webpackChunkhost"] = self["webpackChunkhost"] || []).push([["src_bootstrap_js"], {
  "./src/App.js": (module, exports, require) => {
    require.r(exports);
    require.d(exports, {
      "default": () => _DEFAULT_EXPORT__
    });
    var react_0__ = require("./node_modules/react/index.js");
    var react_0___default = require.n(react_0__);
    var _Sliders_1__ = require("./src/Sliders.js");
    const RemoteNewsList = react_0___default().lazy(() => require.e("webpack_container_remote_remote_NewsList").then(require.t.bind(require, "webpack/container/remote/remote/NewsList", 23)));
    const App = () => {
      return react_0___default().createElement("div", null, react_0___default().createElement("h2", null, "\u672C\u5730\u7EC4\u4EF6Sliders"), react_0___default().createElement(_Sliders_1__["default"], null), react_0___default().createElement("h2", null, "\u8FDC\u7A0B\u7EC4\u4EF6NewsList"), react_0___default().createElement(react_0___default().Suspense, {
        fallback: "loading NewsList"
      }, react_0___default().createElement(RemoteNewsList, null)));
    };
    const _DEFAULT_EXPORT__ = App;
  },
  "./src/Sliders.js": (module, exports, require) => {
    require.r(exports);
    require.d(exports, {
      "default": () => _DEFAULT_EXPORT__
    });
    var react_0__ = require("./node_modules/react/index.js");
    var react_0___default = require.n(react_0__);
    const _DEFAULT_EXPORT__ = () => react_0___default().createElement("div", null, "Sliders");
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