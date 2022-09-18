const { parse, compileScript, rewriteDefault } = require('vue/compiler-sfc');
let content = `
<template>
  <h1>App</h1>
</template>
<script>
export default {
    name:'App'
}
</script>
`;
const filename = 'App.vue';
const { descriptor } = parse(content, { filename });
let script = compileScript(descriptor, { id: filename });
console.log(script.content);
const code = rewriteDefault(script.content, '_sfc_main');
console.log(code);


