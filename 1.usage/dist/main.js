(() => {
  "use strict";
  var modules = {
    "./node_modules/css-loader/dist/cjs.js!./src/index.css": (module, exports, require) => {
      require.r(exports);
      require.d(exports, {
        "default": () => _DEFAULT_EXPORT__
      });
      var _node_modules_css_loader_dist_runtime_noSourceMaps_js_0__ = require("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
      var _node_modules_css_loader_dist_runtime_noSourceMaps_js_0___default = require.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js_0__);
      var _node_modules_css_loader_dist_runtime_api_js_1__ = require("./node_modules/css-loader/dist/runtime/api.js");
      var _node_modules_css_loader_dist_runtime_api_js_1___default = require.n(_node_modules_css_loader_dist_runtime_api_js_1__);
      var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js_1___default()(_node_modules_css_loader_dist_runtime_noSourceMaps_js_0___default());
      ___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  background-color: green;\r\n}", ""]);
      const _DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
    },
    "./node_modules/css-loader/dist/runtime/api.js": module => {
      module.exports = function (cssWithMappingToString) {
        var list = [];
        list.toString = function toString() {
          return this.map(function (item) {
            var content = "";
            var needLayer = typeof item[5] !== "undefined";
            if (item[4]) {
              content += "@supports (".concat(item[4], ") {");
            }
            if (item[2]) {
              content += "@media ".concat(item[2], " {");
            }
            if (needLayer) {
              content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
            }
            content += cssWithMappingToString(item);
            if (needLayer) {
              content += "}";
            }
            if (item[2]) {
              content += "}";
            }
            if (item[4]) {
              content += "}";
            }
            return content;
          }).join("");
        };
        list.i = function i(modules, media, dedupe, supports, layer) {
          if (typeof modules === "string") {
            modules = [[null, modules, undefined]];
          }
          var alreadyImportedModules = {};
          if (dedupe) {
            for (var k = 0; k < this.length; k++) {
              var id = this[k][0];
              if (id != null) {
                alreadyImportedModules[id] = true;
              }
            }
          }
          for (var _k = 0; _k < modules.length; _k++) {
            var item = [].concat(modules[_k]);
            if (dedupe && alreadyImportedModules[item[0]]) {
              continue;
            }
            if (typeof layer !== "undefined") {
              if (typeof item[5] === "undefined") {
                item[5] = layer;
              } else {
                item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
                item[5] = layer;
              }
            }
            if (media) {
              if (!item[2]) {
                item[2] = media;
              } else {
                item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
                item[2] = media;
              }
            }
            if (supports) {
              if (!item[4]) {
                item[4] = "".concat(supports);
              } else {
                item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
                item[4] = supports;
              }
            }
            list.push(item);
          }
        };
        return list;
      };
    },
    "./node_modules/css-loader/dist/runtime/noSourceMaps.js": module => {
      module.exports = function (i) {
        return i[1];
      };
    },
    "./src/index.css": (module, exports, require) => {
      require.r(exports);
      require.d(exports, {
        "default": () => _DEFAULT_EXPORT__
      });
      var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js_0__ = require("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
      var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js_0___default = require.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js_0__);
      var _node_modules_style_loader_dist_runtime_styleDomAPI_js_1__ = require("./node_modules/style-loader/dist/runtime/styleDomAPI.js");
      var _node_modules_style_loader_dist_runtime_styleDomAPI_js_1___default = require.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js_1__);
      var _node_modules_style_loader_dist_runtime_insertBySelector_js_2__ = require("./node_modules/style-loader/dist/runtime/insertBySelector.js");
      var _node_modules_style_loader_dist_runtime_insertBySelector_js_2___default = require.n(_node_modules_style_loader_dist_runtime_insertBySelector_js_2__);
      var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js_3__ = require("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
      var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js_3___default = require.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js_3__);
      var _node_modules_style_loader_dist_runtime_insertStyleElement_js_4__ = require("./node_modules/style-loader/dist/runtime/insertStyleElement.js");
      var _node_modules_style_loader_dist_runtime_insertStyleElement_js_4___default = require.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js_4__);
      var _node_modules_style_loader_dist_runtime_styleTagTransform_js_5__ = require("./node_modules/style-loader/dist/runtime/styleTagTransform.js");
      var _node_modules_style_loader_dist_runtime_styleTagTransform_js_5___default = require.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js_5__);
      var _node_modules_css_loader_dist_cjs_js_index_css_6__ = require("./node_modules/css-loader/dist/cjs.js!./src/index.css");
      var options = {};
      options.styleTagTransform = _node_modules_style_loader_dist_runtime_styleTagTransform_js_5___default();
      options.setAttributes = _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js_3___default();
      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js_2___default().bind(null, "head");
      options.domAPI = _node_modules_style_loader_dist_runtime_styleDomAPI_js_1___default();
      options.insertStyleElement = _node_modules_style_loader_dist_runtime_insertStyleElement_js_4___default();
      var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js_0___default()(_node_modules_css_loader_dist_cjs_js_index_css_6__["default"], options);
      const _DEFAULT_EXPORT__ = _node_modules_css_loader_dist_cjs_js_index_css_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css_6__["default"].locals : undefined;
    },
    "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js": module => {
      var stylesInDOM = [];
      function getIndexByIdentifier(identifier) {
        var result = -1;
        for (var i = 0; i < stylesInDOM.length; i++) {
          if (stylesInDOM[i].identifier === identifier) {
            result = i;
            break;
          }
        }
        return result;
      }
      function modulesToDom(list, options) {
        var idCountMap = {};
        var identifiers = [];
        for (var i = 0; i < list.length; i++) {
          var item = list[i];
          var id = options.base ? item[0] + options.base : item[0];
          var count = idCountMap[id] || 0;
          var identifier = "".concat(id, " ").concat(count);
          idCountMap[id] = count + 1;
          var indexByIdentifier = getIndexByIdentifier(identifier);
          var obj = {
            css: item[1],
            media: item[2],
            sourceMap: item[3],
            supports: item[4],
            layer: item[5]
          };
          if (indexByIdentifier !== -1) {
            stylesInDOM[indexByIdentifier].references++;
            stylesInDOM[indexByIdentifier].updater(obj);
          } else {
            var updater = addElementStyle(obj, options);
            options.byIndex = i;
            stylesInDOM.splice(i, 0, {
              identifier: identifier,
              updater: updater,
              references: 1
            });
          }
          identifiers.push(identifier);
        }
        return identifiers;
      }
      function addElementStyle(obj, options) {
        var api = options.domAPI(options);
        api.update(obj);
        var updater = function updater(newObj) {
          if (newObj) {
            if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
              return;
            }
            api.update(obj = newObj);
          } else {
            api.remove();
          }
        };
        return updater;
      }
      module.exports = function (list, options) {
        options = options || {};
        list = list || [];
        var lastIdentifiers = modulesToDom(list, options);
        return function update(newList) {
          newList = newList || [];
          for (var i = 0; i < lastIdentifiers.length; i++) {
            var identifier = lastIdentifiers[i];
            var index = getIndexByIdentifier(identifier);
            stylesInDOM[index].references--;
          }
          var newLastIdentifiers = modulesToDom(newList, options);
          for (var _i = 0; _i < lastIdentifiers.length; _i++) {
            var _identifier = lastIdentifiers[_i];
            var _index = getIndexByIdentifier(_identifier);
            if (stylesInDOM[_index].references === 0) {
              stylesInDOM[_index].updater();
              stylesInDOM.splice(_index, 1);
            }
          }
          lastIdentifiers = newLastIdentifiers;
        };
      };
    },
    "./node_modules/style-loader/dist/runtime/insertBySelector.js": module => {
      var memo = {};
      function getTarget(target) {
        if (typeof memo[target] === "undefined") {
          var styleTarget = document.querySelector(target);
          if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
            try {
              styleTarget = styleTarget.contentDocument.head;
            } catch (e) {
              styleTarget = null;
            }
          }
          memo[target] = styleTarget;
        }
        return memo[target];
      }
      function insertBySelector(insert, style) {
        var target = getTarget(insert);
        if (!target) {
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }
        target.appendChild(style);
      }
      module.exports = insertBySelector;
    },
    "./node_modules/style-loader/dist/runtime/insertStyleElement.js": module => {
      function insertStyleElement(options) {
        var element = document.createElement("style");
        options.setAttributes(element, options.attributes);
        options.insert(element, options.options);
        return element;
      }
      module.exports = insertStyleElement;
    },
    "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js": (module, __unused_webpack_exports, require) => {
      function setAttributesWithoutAttributes(styleElement) {
        var nonce = true ? require.nc : 0;
        if (nonce) {
          styleElement.setAttribute("nonce", nonce);
        }
      }
      module.exports = setAttributesWithoutAttributes;
    },
    "./node_modules/style-loader/dist/runtime/styleDomAPI.js": module => {
      function apply(styleElement, options, obj) {
        var css = "";
        if (obj.supports) {
          css += "@supports (".concat(obj.supports, ") {");
        }
        if (obj.media) {
          css += "@media ".concat(obj.media, " {");
        }
        var needLayer = typeof obj.layer !== "undefined";
        if (needLayer) {
          css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
        }
        css += obj.css;
        if (needLayer) {
          css += "}";
        }
        if (obj.media) {
          css += "}";
        }
        if (obj.supports) {
          css += "}";
        }
        var sourceMap = obj.sourceMap;
        if (sourceMap && typeof btoa !== "undefined") {
          css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
        }
        options.styleTagTransform(css, styleElement, options.options);
      }
      function removeStyleElement(styleElement) {
        if (styleElement.parentNode === null) {
          return false;
        }
        styleElement.parentNode.removeChild(styleElement);
      }
      function domAPI(options) {
        var styleElement = options.insertStyleElement(options);
        return {
          update: function update(obj) {
            apply(styleElement, options, obj);
          },
          remove: function remove() {
            removeStyleElement(styleElement);
          }
        };
      }
      module.exports = domAPI;
    },
    "./node_modules/style-loader/dist/runtime/styleTagTransform.js": module => {
      function styleTagTransform(css, styleElement) {
        if (styleElement.styleSheet) {
          styleElement.styleSheet.cssText = css;
        } else {
          while (styleElement.firstChild) {
            styleElement.removeChild(styleElement.firstChild);
          }
          styleElement.appendChild(document.createTextNode(css));
        }
      }
      module.exports = styleTagTransform;
    }
  };
  var cache = {};
  function require(moduleId) {
    var cachedModule = cache[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    var module = cache[moduleId] = {
      id: moduleId,
      exports: {}
    };
    modules[moduleId](module, module.exports, require);
    return module.exports;
  }
  (() => {
    require.n = module => {
      var getter = module && module.__esModule ? () => module['default'] : () => module;
      require.d(getter, {
        a: getter
      });
      return getter;
    };
  })();
  (() => {
    require.d = (exports, definition) => {
      for (var key in definition) {
        if (require.o(definition, key) && !require.o(exports, key)) {
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          });
        }
      }
    };
  })();
  (() => {
    require.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
  })();
  (() => {
    require.r = exports => {
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
      }
      Object.defineProperty(exports, '__esModule', {
        value: true
      });
    };
  })();
  (() => {
    require.nc = undefined;
  })();
  var exports = {};
  (() => {
    require.r(exports);
    var _index_css_0__ = require("./src/index.css");
  })();
})();