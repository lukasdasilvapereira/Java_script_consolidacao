//1
let string = "JavaScript"

let revertida = string.split("").reverse("").join("")

console.log(revertida)

//2

let str = "Podolski"

let vogais = "aeiou"
let vogaisPequena = vogais.toLowerCase()
let contador = 0

for (let i = 0; i < str.length; i++) {
    if (vogaisPequena.includes(str[i])) {
        contador++
    }
}

console.log(`${str} possui ${contador} vogais`)

//3

let string2 = "armario"

let revertida2 = string2.split("").reverse("").join("")

if (string2 == revertida2) {
    console.log(true)
} else {
    console.log(false)
}

//4

function calculadora() {

    function multiplicar(a, b) {
        let resultado = a * b
        console.log(resultado)
    }

    function soma(a, b) {
        let resultado = a + b
        console.log(resultado)
    }

    function subtracao(a, b) {
        let resultado = a - b
        console.log(resultado)
    }

    function dividir(a, b) {
        let resultado = a / b
        console.log(resultado)
    }

    return { multiplicar, soma, subtracao, dividir }
}

const calc = calculadora()
calc.dividir(10, 2)
calc.multiplicar(20, 5)

// 5

let number = Math.round(Math.random() * 100)

console.log(number)

// 6

let arr = [4, 10, 20, 55]

let f = arr.map((s) => {
    return s * 2
})

console.log(f)

// 7

let nomes = ["Ana", "Lucas", "Paulo"]

let s = nomes.map((nome) => {
    return {
        nome: nome
    }
})

console.log(s)











