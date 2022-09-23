const { init, parse } = require('es-module-lexer');

(async function () {
  const sourceCode = `import _ from 'lodash';\nexport var age = 15;`;
  debugger
  await init;
  const [imports, exports] = parse(sourceCode);
  console.log(imports, exports);
})();

/* import.meta.hot.accept(['./renderModule.js'], ([renderModule]) => {
  renderModule.render();
}); */