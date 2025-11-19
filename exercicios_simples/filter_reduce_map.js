let numeros = [5, 12, 8, 130, 44];

let x = numeros.filter((n) => {
    return n > 10
})

console.log(x)

let numbers = [5, 12, 8, 130, 44];

let y = numbers.reduce((total, item) => {
    return total + item
}, 0)

console.log(y)

let n = [5, 12, 8, 130, 44];

let m = n.map((s) => {
    return s * 2
}, 0)

console.log(m)


