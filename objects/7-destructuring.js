const [a, b] = [1, 2]   // Array Destructure

const person = {
  firstname: "Alice",
  age: 25,
  city: "Athens"
}

const { firstname, age, city } = person     // Object Destructure
console.log(firstname, age, city)

const { firstname: first, age: newAge, city: myCity = "Toronto" } = person
console.log(first, newAge, myCity)

