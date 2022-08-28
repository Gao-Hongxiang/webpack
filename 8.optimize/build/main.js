(() => {
  var exports = {};
  (() => {
    var exports = exports;
    exports.add = (a, b) => {
      return a + b;
    };
    exports.minus = (a, b) => {
      return a - b;
    };
  })();
  module.exports.calculator = exports.add;
})();