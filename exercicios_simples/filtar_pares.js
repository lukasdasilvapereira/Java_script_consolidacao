const numbers = [1, 5, 4, 6, 10, 15, 12, 100, 101]

let pares = numbers.filter((p) => {
    return p % 2 == 0
})

let impares = numbers.filter((i) => {
    return i % 2 != 0
})

console.log(pares)
console.log(impares)
