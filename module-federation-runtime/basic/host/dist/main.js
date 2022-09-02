(() => {
	var modules = {
		"webpack/container/reference/remote": (module, exports, require) => {
			module.exports = new Promise(resolve => {
				if (typeof remote !== "undefined") return resolve();
				require.l("http://127.0.0.1:3000/remoteEntry.js", resolve);
			}).then(() => remote);
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
		let script = document.createElement('script');
		script.src = url;
		script.onload = done;
		document.head.appendChild(script);
	};
	require.r = exports => {
		Object.defineProperty(exports, '__esModule', {
			value: true
		});
	};
	var chunkMapping = {
		"webpack_container_remote_remote_RemoteComponent": ["webpack/container/remote/remote/RemoteComponent"]
	};
	var idToExternalAndNameMapping = {
		"webpack/container/remote/remote/RemoteComponent": ["default", "./RemoteComponent", "webpack/container/reference/remote"]
	};
	require.f.remotes = (chunkId, promises) => {
		if (require.o(chunkMapping, chunkId)) {
			chunkMapping[chunkId].forEach(id => {
				var data = idToExternalAndNameMapping[id];
				var promise = require(data[2]).then(external => {
					return external.get(data[1]);
				}).then(factory => {
					modules[id] = module => {
						module.exports = factory();
					};
				});
				promises.push(promise);
			});
		}
	};
	require.p = document.currentScript.src.replace(/\/[^\/]+$/, "/");
	var installedChunks = {
		"main": 0
	};
	require.f.j = (chunkId, promises) => {
		var installedChunkData;
		if ("webpack_container_remote_remote_RemoteComponent" !== chunkId) {
			var promise = new Promise((resolve, reject) => installedChunkData = installedChunks[chunkId] = [resolve, reject]);
			promises.push(installedChunkData[2] = promise);
			var url = require.p + require.u(chunkId);
			require.l(url);
		}
	};
	var webpackJsonpCallback = data => {
		var [chunkIds, moreModules] = data;
		var moduleId,
			chunkId,
			i = 0;
		if (chunkIds.some(id => installedChunks[id] !== 0)) {
			for (moduleId in moreModules) {
				if (require.o(moreModules, moduleId)) {
					require.m[moduleId] = moreModules[moduleId];
				}
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
	var chunkLoadingGlobal = self["webpackChunkhost"] = [];
	chunkLoadingGlobal.push = webpackJsonpCallback;
	require.e("src_bootstrap_js").then(() => require("./src/bootstrap.js"));
})();