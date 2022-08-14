let value = {number:100};
exports.value = value;

setTimeout(() => {
  value.number = 200;
},2000)