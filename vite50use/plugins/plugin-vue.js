const fs = require('fs-extra');
const { parse, compileScript, rewriteDefault, compileTemplate } = require('vue/compiler-sfc');
const descriptorCache = new Map();
function vue() {
  let root;
  return {
    name: 'vue',
    async config(config) {
      root = config.root;
      return {
        define: {
          __VUE_OPTIONS_API__: true,
          __VUE_PROD_DEVTOOLS__: false
        }
      }
    },
    async transform(code, id) {
      const { filename } = parseVueRequest(id);
      if (filename.endsWith('.vue')) {
        return await transformMain(code, filename);
      }
      return null;
    }
  }
}
async function transformMain(source, filename) {
  const descriptor = await getDescriptor(filename);
  const scriptCode = genScriptCode(descriptor, filename);
  const templateCode = genTemplateCode(descriptor, filename);
  let code = [
    scriptCode,
    templateCode,
    ' _sfc_main.render = render;',
    'export default _sfc_main;'
  ].join('\n');
  return { code }
}
function genTemplateCode(descriptor, id) {
  let content = descriptor.template.content;
  let result = compileTemplate({ source: content, id });
  return result.code;
}
function genScriptCode(descriptor, id) {
  let script = compileScript(descriptor, { id });
  return rewriteDefault(script.content, '_sfc_main');
}
async function getDescriptor(filename) {
  let descriptor = descriptorCache.get(filename);
  if (descriptor) return descriptor;
  //读取App.vue文件的内容
  const content = await fs.readFile(filename, 'utf8');
  const result = parse(content, { filename });
  descriptor = result.descriptor;
  descriptorCache.set(filename, descriptor);
  return descriptor;
}
function parseVueRequest(id) {
  //App.vue?id=1  filename=App.vue query={id:1}
  const [filename, querystring = ''] = id.split('?');
  let query = new URLSearchParams(querystring);//qs
  return {
    filename,
    query
  }
}
module.exports = vue;

/*
  const _sfc_main = {
    name: 'App'
  }
  import { openBlock as _openBlock, createElementBlock as _createElementBlock } from "/node_modules/.vite50/deps/vue.js"
  function _sfc_render(_ctx, _cache) {
    return (_openBlock(), _createElementBlock("h1", null, "App"))
  }
  _sfc_main.render = _sfc_render;
  export default _sfc_main;
*/