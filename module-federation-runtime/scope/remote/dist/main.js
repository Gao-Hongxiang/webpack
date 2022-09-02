(() => {
  var modules = {
    "./src/index.js": (module, exports, require) => {
      require.e("src_bootstrap_js").then(require.bind(require, "./src/bootstrap.js"));
    }
  };
  function require(moduleId) {
    var module = {
      exports: {}
    };
    modules[moduleId](module, module.exports, require);
    return module.exports;
  }
  require.m = modules;
  require.n = module => {
    var getter = module && module.__esModule ? () => module['default'] : () => module;
    require.d(getter, {
      a: getter
    });
    return getter;
  };
  require.d = (exports, definition) => {
    for (var key in definition) {
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: definition[key]
      });
    }
  };
  require.f = {};
  require.e = chunkId => {
    return Promise.all(Object.keys(require.f).reduce((promises, key) => {
      require.f[key](chunkId, promises);
      return promises;
    }, []));
  };
  require.u = chunkId => {
    return "" + chunkId + ".js";
  };
  require.g = window;
  require.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
  require.l = (url, done) => {
    var script = document.createElement('script');
    script.src = url;
    script.onload = done;
    document.head.appendChild(script);
  };
  require.r = exports => {
    Object.defineProperty(exports, '__esModule', { value: true });
  };
  require.S = {};
  require.I = (name) => {
    if (!require.o(require.S, name)) require.S[name] = {};
    var scope = require.S[name];
    var uniqueName = "remote";
    var register = (name, version, factory) => {
      var versions = scope[name] = scope[name] || {};
      var activeVersion = versions[version];
      if (!activeVersion)
        versions[version] = {
          get: factory,
          from: uniqueName
        };
    };
    var promises = [];
    switch (name) {
      case "default":
        {
          register("check-is-array", "2.0.6", () => require.e("node_modules_check-is-array_index_js").then(() => () => require("./node_modules/check-is-array/index.js")));
        }
        break;
    }
    return Promise.all(promises);
  };
  require.p = document.currentScript.src.replace(/\/[^\/]+$/, "/");
  var parseVersion = str => {
    var p = p => {
      return p.split(".").map(p => {
        return +p == p ? +p : p;
      });
    },
      n = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(str),
      r = n[1] ? p(n[1]) : [];
    return n[2] && (r.length++, r.push.apply(r, p(n[2]))), n[3] && (r.push([]), r.push.apply(r, p(n[3]))), r;
  };
  var versionLt = (a, b) => {
    a = parseVersion(a), b = parseVersion(b);
    for (var r = 0; ;) {
      if (r >= a.length) return r < b.length && "u" != (typeof b[r])[0];
      var e = a[r],
        n = (typeof e)[0];
      if (r >= b.length) return "u" == n;
      var t = b[r],
        f = (typeof t)[0];
      if (n != f) return "o" == n && "n" == f || "s" == f || "u" == n;
      if ("o" != n && "u" != n && e != t) return e < t;
      r++;
    }
  };
  var rangeToString = range => {
    var r = range[0],
      n = "";
    if (1 === range.length) return "*";
    if (r + .5) {
      n += 0 == r ? ">=" : -1 == r ? "<" : 1 == r ? "^" : 2 == r ? "~" : r > 0 ? "=" : "!=";
      for (var e = 1, a = 1; a < range.length; a++) {
        e--, n += "u" == (typeof (t = range[a]))[0] ? "-" : (e > 0 ? "." : "") + (e = 2, t);
      }
      return n;
    }
    var g = [];
    for (a = 1; a < range.length; a++) {
      var t = range[a];
      g.push(0 === t ? "not(" + o() + ")" : 1 === t ? "(" + o() + " || " + o() + ")" : 2 === t ? g.pop() + " " + g.pop() : rangeToString(t));
    }
    return o();
    function o() {
      return g.pop().replace(/^\((.+)\)$/, "$1");
    }
  };
  var satisfy = (range, version) => {
    if (0 in range) {
      version = parseVersion(version);
      var e = range[0],
        r = e < 0;
      r && (e = -e - 1);
      for (var n = 0, i = 1, a = !0; ; i++, n++) {
        var f,
          s,
          g = i < range.length ? (typeof range[i])[0] : "";
        if (n >= version.length || "o" == (s = (typeof (f = version[n]))[0])) return !a || ("u" == g ? i > e && !r : "" == g != r);
        if ("u" == s) {
          if (!a || "u" != g) return !1;
        } else if (a) {
          if (g == s) {
            if (i <= e) {
              if (f != range[i]) return !1;
            } else {
              if (r ? f > range[i] : f < range[i]) return !1;
              f != range[i] && (a = !1);
            }
          } else if ("s" != g && "n" != g) {
            if (r || i <= e) return !1;
            a = !1, i--;
          } else {
            if (i <= e || s < g != r) return !1;
            a = !1;
          }
        } else "s" != g && "n" != g && (a = !1, i--);
      }
    }
    var t = [],
      o = t.pop.bind(t);
    for (n = 1; n < range.length; n++) {
      var u = range[n];
      t.push(1 == u ? o() | o() : 2 == u ? o() & o() : u ? satisfy(u, version) : !o());
    }
    return !!o();
  };
  var findSingletonVersionKey = (scope, key) => {
    var versions = scope[key];
    return Object.keys(versions).reduce((a, b) => {
      return !a || !versions[a].loaded && versionLt(a, b) ? b : a;
    }, 0);
  };
  var getInvalidSingletonVersionMessage = (scope, key, version, requiredVersion) => {
    return "Unsatisfied version " + version + " from " + (version && scope[key][version].from) + " of shared singleton module " + key + " (required " + rangeToString(requiredVersion) + ")";
  };
  var getSingletonVersion = (scope, scopeName, key, requiredVersion) => {
    var version = findSingletonVersionKey(scope, key);
    if (!satisfy(requiredVersion, version))
      console.warn(getInvalidSingletonVersionMessage(scope, key, version, requiredVersion));
    return get(scope[key][version]);
  };
  var get = entry => {
    entry.loaded = 1;
    return entry.get();
  };
  var init = fn => function (scopeName, key, version, fallback) {
    var promise = require.I(scopeName);
    return promise.then(() => fn(scopeName, require.S[scopeName], key, version, fallback));
  };
  var loadSingletonVersionCheckFallback = init((scopeName, scope, key, version, fallback) => {
    if (!scope || !require.o(scope, key)) return fallback();
    return getSingletonVersion(scope, scopeName, key, version);
  });
  var installedModules = {};
  var moduleToHandlerMapping = {
    "webpack/sharing/consume/default/check-is-array/check-is-array": () => loadSingletonVersionCheckFallback("default", "check-is-array", [1, 2, 0, 6], () => require.e("node_modules_check-is-array_index_js").then(() => () => require("./node_modules/check-is-array/index.js")))
  };
  var chunkMapping = {
    "src_bootstrap_js": ["webpack/sharing/consume/default/check-is-array/check-is-array"]
  };
  require.f.consumes = (chunkId, promises) => {
    if (require.o(chunkMapping, chunkId)) {
      chunkMapping[chunkId].forEach(id => {
        if (require.o(installedModules, id)) return promises.push(installedModules[id]);
        var onFactory = factory => {
          installedModules[id] = 0;
          require.m[id] = module => {
            module.exports = factory();
          };
        };
        var promise = moduleToHandlerMapping[id]();
        if (promise.then) {
          promises.push(installedModules[id] = promise.then(onFactory));
        } else onFactory(promise);
      });
    }
  };
  var installedChunks = {
    "main": 0
  };
  require.f.j = (chunkId, promises) => {
    var installedChunkData;
    var promise = new Promise((resolve, reject) => installedChunkData = installedChunks[chunkId] = [resolve, reject]);
    promises.push(installedChunkData[2] = promise);
    var url = require.p + require.u(chunkId);
    require.l(url);
  };
  var webpackJsonpCallback = (data) => {
    var [chunkIds, moreModules] = data;
    var moduleId, chunkId, i = 0;
    for (moduleId in moreModules) {
      if (require.o(moreModules, moduleId)) {
        require.m[moduleId] = moreModules[moduleId];
      }
    }
    for (; i < chunkIds.length; i++) {
      chunkId = chunkIds[i];
      if (require.o(installedChunks, chunkId) && installedChunks[chunkId]) {
        installedChunks[chunkId][0]();
      }
      installedChunks[chunkId] = 0;
    }
  };
  var chunkLoadingGlobal = self["webpackChunkremote"] = self["webpackChunkremote"] || [];
  chunkLoadingGlobal.push = webpackJsonpCallback;
  require("./src/index.js");
})();