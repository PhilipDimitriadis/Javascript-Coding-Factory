console.log(Number.MAX_VALUE, Number.MIN_VALUE)
console.log(Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER)
console.log(Number.POSITIVE_INFINITY) // 12/0

if (Number.isInteger(12)) {
  console.log("Is Integer")
} else {
  console.log("Not Integer")
}

if (Number.isNaN(NaN)) {       // 10 / "AUEB"
  console.log("True")
} else {
  console.log("False")
}

if (isNaN(NaN)) {
  console.log("Is NaN")
} else {
  console.log("Not NaN")
}

console.log(Number.parseInt("44"))
console.log(parseInt("42"))

console.log(Number.parseFloat("44.8"))
console.log(parseFloat("45.1"))

const num1 = 0.1 + 0.2
const num2 = 0.3

function compareFloatingPoints(a, b) {
  return Math.abs(a - b) < Number.EPSILON
}
console.log(compareFloatingPoints(num1, num2))