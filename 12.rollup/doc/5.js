
function two() {
  var twoValue = 'twoValue';
  return twoValue;
}
function two2() {
  var twoValue = 'twoValue';
  return twoValue;
}
function one() {
  let twoValue = two();
  let twoValue2 = two2();
  console.log(twoValue, twoValue2);
}
one();
//经过scope hosting优化，也就是作用域提升之后

function one() {
  var twoValue = 'twoValue';
  var twoValue = 'twoValue';
  console.log(twoValue, twoValue);
}
one();
