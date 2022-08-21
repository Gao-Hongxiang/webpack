(() => {
  var modules = {
    //每个模块都有ID，每个模块ID都是相对于根目录的相对路径
    "./src/title.js": module => {
      module.exports = 'title';
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
    let title = require("./src/title.js");
    console.log('entry1', title);
  })();
})();