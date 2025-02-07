const initial = { name: "Alice", age: 30, address: { street: "Patission", num: 76 } }


// 1. With Spreading. Spread operator gives a shallow copy
const copyInitial = { ...initial }
console.log(copyInitial)

// 2. Object Type
const copyInitial2 = Object.assign({}, initial)
console.log(copyInitial2)

// 3. With JSON function -- Deep copy
const copyInitial3 = JSON.parse(JSON.stringify(initial))

const initial2 = { name: "Alice", age: undefined, address: { street: "Patission", num: 76 } }
console.log(JSON.stringify(initial2))

// 4. Deep Copy
const copyInitial4 = structuredClone(initial)