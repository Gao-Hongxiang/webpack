const dedent = require('dedent');

//indent缩进
//dedent 取消缩进，删除缩进 
let str = dedent`
   let a =1;
   let b=2;
`;
console.log(str);s