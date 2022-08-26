function sum(a, b) {
  return a + b;
}

const minus = (a, b) => a - b;

/* function multiply(a, b) {
  return a * b;
} */
let multiply = new Function('a,b', 'return a*b');
console.log(multiply(2,3));