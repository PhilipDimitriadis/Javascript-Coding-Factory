const store = `[
{"id": "pro4vog", 
  "fields": {
    "company": "ikea",
    "colors": ["#ff1234", "#222"],
    "featured": true, 
    "price": 990,
    "genre": "white-black-chair"
  }
},
{"id": "pro4vog", 
  "fields": {
    "company": "ikea",
    "colors": ["#AB199", "#222"],
    "featured": true, 
    "price": 880,
    "genre": "black-black-chair"
  }
}]`

console.log(JSON.parse(store))