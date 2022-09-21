const fs = require('fs-extra');
const { parse,
  compileScript,//编译脚本
  rewriteDefault,
  compileTemplate,//编译模板
  compileStyleAsync//编译样式
} = require('vue/compiler-sfc');
const hash = require('hash-sum');
const dedent = require('dedent');
const descriptorCache = new Map();
function vue() {
  let root;//根目录
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
    async load(id) {
      const { filename, query } = parseVueRequest(id);
      if (query.has('vue')) {
        const descriptor = await getDescriptor(filename);
        if (query.get('type') === 'style') {
          let styleBlock = descriptor.styles[Number(query.get('index'))];
          if (styleBlock) {
            return { code: styleBlock.content };//h1{color:red}
          }
        }
      }
    },
    async transform(code, id) {
      const { filename, query } = parseVueRequest(id);// /src/App.vue
      if (filename.endsWith('.vue')) {
        if (query.get('type') === 'style') {
          const descriptor = await getDescriptor(filename);
          let result = await transformStyle(code, descriptor, Number(query.get('index')));
          return result;
        } else {
          return await transformMain(code, filename);
        }
      }
      return null;
    }
  }
}
async function transformStyle(code, descriptor, index) {
  const styleBlock = descriptor.styles[index];
  const result = await compileStyleAsync({
    filename: descriptor.filename,//文件名
    source: code,//样式的源代码
    id: `data-v-${descriptor.id}`,//为了实现局部作用域，需要一个唯一的ID
    scoped: styleBlock.scoped//实现局部样式
  });
  let styleCode = result.code;
  return {
    code: `
     var style = document.createElement('style');
     style.innerHTML = ${JSON.stringify(styleCode)};
     document.head.appendChild(style);
  `
  }
}
async function transformMain(source, filename) {
  const descriptor = await getDescriptor(filename);
  const scriptCode = genScriptCode(descriptor, filename);
  const templateCode = genTemplateCode(descriptor, filename);
  const styleCode = genStyleCode(descriptor, filename);
  let code = [
    styleCode,
    scriptCode,
    templateCode,
    ' _sfc_main.render = render;',
    'export default _sfc_main;'
  ].join('\n');
  return { code }
}
function genStyleCode(descriptor, filename) {
  let styleCode = '';
  if (descriptor.styles.length > 0) {
    descriptor.styles.forEach((style, index) => {
      const query = `?vue&type=style&index=${index}&lang.css`;
      const styleRequest = (filename + query).replace(/\\/g, '/');;
      //import "/src/App.vue?vue&type=style&index=0&lang.css"
      styleCode += `\nimport "${styleRequest}"`;
    });
    return styleCode
  }
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
  descriptor.id = hash(filename);
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