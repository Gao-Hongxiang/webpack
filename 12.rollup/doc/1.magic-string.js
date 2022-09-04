const { lineBreakG } = require('acorn');
var MagicString = require('magic-string');
var sourceCode = `export var name = "zhufeng"`;
var ms = new MagicString(sourceCode);
console.log(ms);
console.log(ms.snip(0, 6).toString());//export slice(0,6)
console.log(ms.remove(0, 7).toString());//var name = "zhufeng"


//还可以用来拼接字符串 Bundle一束 一包
let bundle = new MagicString.Bundle();
bundle.addSource({
  content: `var a = 1`,
  separator: '\n'
});
bundle.addSource({
  content: `var b = 2`,
  separator: '\n'
});
console.log(bundle.toString());