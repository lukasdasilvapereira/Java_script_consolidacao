const numbers = [1, 5, 20, 35, 67, 86]

const double = numbers.map((d) => {
    return d * 2
})

console.log(double)

const fahrenheit = [0, 10, 25, 45, 102, 150]

const celsius = fahrenheit.map((c) => {
    return Math.round(((c - 32) * 5) / 9)
})

console.log(celsius)