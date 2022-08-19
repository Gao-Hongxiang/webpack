(() => {
  var modules = {
    "./src/msg.js": module => {
      module.exports = 'title';
    },
    "./src/title.js": (module, __unused_webpack_exports, require) => {
      let msg = require("./src/msg.js");
      module.exports = 'title' + msg;
    }
  };
  var cache = {};
  function require(moduleId) {
    var cachedModule = cache[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    var module = cache[moduleId] = {
      exports: {}
    };
    modules[moduleId](module, module.exports, require);
    return module.exports;
  }
  var exports = {};
  (() => {
    const title = require("./src/title.js");
    console.log('title', title);
  })();
})();