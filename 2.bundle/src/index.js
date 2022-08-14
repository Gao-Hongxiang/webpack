/* let title = require('./title.js');
console.log(title.default);
console.log(title.age); */

let ageModule = require('./age');

setTimeout(() => {
  console.log(ageModule.value.number);
},3000)