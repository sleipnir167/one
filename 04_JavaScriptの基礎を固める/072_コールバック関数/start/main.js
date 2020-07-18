function hello(callback, lastname) {
  console.log(callback);
  console.log("hello" + callback(lastname));
}

function getname() {
  return "Code Mafia";
}

hello(function (name) {
  return "Code" + name;
}, "taro");

function doSomething(a, b, callback) {
  const result = callback(a, b);
  console.log(result);
}

function multiply(a, b) {
  return a * b;
}

doSomething(11, 33, multiply);
