function x() {
  console.log("function biasa");
}
const express = function () {
  console.log("functino expression");
};
const arrow = () => console.log("Arrow Funcion");

const arrowParam = (x, y) => {
  return x + y;
};
function callback(x, y, call) {
  return call(x, y);
}
function add(a, b) {
  return a + b;
}

console.log(x());
console.log(express());
console.log(arrow());
console.log(arrowParam(10, 20));
console.log(callback(10, 20, add));
