let obj = {};
var ageValue = 10;
Object.defineProperty(
  obj,
  'age',
  {
    enumerable: true,//for in
    configurable: true,//delete obj.age
    get() {
      return ageValue;
    },
    set(newValue) {
      ageValue = newValue;
    }
  }
);
console.log(obj.age);
obj.age = 100;
console.log(obj.age);