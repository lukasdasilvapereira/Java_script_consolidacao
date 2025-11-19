const values = [1.5, 5, 8, 16, 18]

let agregacao = values.reduce((total, item) => {
    return total + item
}, 0)

console.log(agregacao)

let avg = values.reduce((total, item, index) => {
    return (total + item) / (index + 1)
}, 0)

console.log(avg)

let double = values.reduce((total, item) => 
    total.concat(item * 2), []
)

console.log(double)