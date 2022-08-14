debugger
var modules = {
  //属性是一个模块的ID，也就是以根目录为当前目录的相对路径
  "./src/title.js": (module,exports,require) => {
    module.exports = 'title';
  }
};
function require(moduleId) {
  var module = {
    exports: {}
  };
  modules[moduleId](module, module.exports, require);
  return module.exports;
}
let title = require("./src/title.js");
console.log(title);
