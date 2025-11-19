const numbers = [18, 10, 1, 15]

let res = numbers.filter((n) => {
    return n >= 10
})

const people = [
    {name: "Lucas", age: 20, "gender": "Male"},
    {name: "Luan", age: 9, gender: "Male"},
    {name: "Ana", age: 20, gender: "Female"}
]

let m = people.filter((p) => {
    return p.age >= 18 && p.gender === "Male"
})

console.log(m)