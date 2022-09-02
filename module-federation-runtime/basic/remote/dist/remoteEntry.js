var remote;
debugger
(() => {
	var modules = {};
	function require(moduleId) {
		var module = {
			exports: {}
		};
		modules[moduleId](module, module.exports, require);
		return module.exports;
	}
	require.m = modules;
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
	require.l = url => {
		let script = document.createElement('script');
		script.src = url;
		document.head.appendChild(script);
	};
	require.r = exports => {
		Object.defineProperty(exports, '__esModule', {
			value: true
		});
	};
	require.p = document.currentScript.src.replace(/\/[^\/]+$/, "/");
	var installedChunks = {
		"remote": 0
	};
	require.f.j = (chunkId, promises) => {
		var installedChunkData;
		var promise = new Promise((resolve, reject) => installedChunkData = installedChunks[chunkId] = [resolve, reject]);
		promises.push(installedChunkData[2] = promise);
		var url = require.p + require.u(chunkId);
		require.l(url);
	};
	var webpackJsonpCallback = data => {
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
	var exports = {};
	var moduleMap = {
		"./RemoteComponent": () => {
			return require.e("src_RemoteComponent_js").then(() => () => require("./src/RemoteComponent.js"));
		}
	};
	var get = (module) => {
		return moduleMap[module]();
	};
	require.d(exports, {
		get: () => get
	});
	remote = exports;
})();