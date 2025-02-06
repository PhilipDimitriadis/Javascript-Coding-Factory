const cities = ["Athens", "Paris", "Toronto"]

// Add - Modifies the array
cities.push("London")

let city = cities[0]
console.log(city)

cities[1] = "London"

cities.forEach(c => console.log(c))

cities.sort()

cities.sort((a, b) => a.localeCompare(b, "en"))
const citiesSorted = cities.slice().sort((a, b) => a.localeCompare(b, "en"))     // Shallow Copy


// Copy Deep Copy
const citiesCopy1 = JSON.parse(JSON.stringify(cities))

const citiesCopy2 = structuredClone(cities)

// Shallow Copies -- Spread Operator
const citiesCopy3 = [...cities]

const nums = [1, 2, 3, 4]
let maxVal = Math.max(...nums)
let maxIndex = cities.indexOf(maxVal)
console.log(`Max Value: ${maxVal}, Max Index: ${maxIndex} `)