const { init, parse } = require('es-module-lexer');
(async function () {
  const sourceCode = `
    import.meta.hot.accept(['./renderModule.js'], ([renderModule]) => {
    renderModule.render();
  });
  `;
  await init;
  const [imports, exports] = parse(sourceCode);
  //console.log(imports);
  for (let index = 0; index < imports.length; index++) {
    const { s: start, e: end, n: specifier } = imports[index];
    const rawUrl = sourceCode.slice(start, end);
    console.log(rawUrl);//import.meta
  }
})();

/* import.meta.hot.accept(['./renderModule.js'], ([renderModule]) => {
  renderModule.render();
}); */