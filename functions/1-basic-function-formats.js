// 1. Basic Function Definition
function greet(name) {
  return `Hello, ${name}`
}

function add(a, b) {
  return a + b
}

console.log(greet("Alice"))

// 2. Function Expression
const mul = function (a, b) {
  return a * b
}

let result = mul(3, 4)

// 3. Arrow Function
const div = (a, b) => a / b