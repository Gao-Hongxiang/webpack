
function polyfill() {
  return {
    name: 'inject-polyfill2',//插件的名字
    async transform(code, id) {
      return `
        console.log('polyfill');
        ${code}
      `;
    }
  }
}
export default polyfill;