const knowJsSrcRE = /\.js$/;
const isJSRequest = (url) => {
  return knowJsSrcRE.test(url);
}
console.log(isJSRequest('/src/main.js?id=1'));