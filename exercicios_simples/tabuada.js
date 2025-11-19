let n = 5

for(let i = 0; i <= 10; i++) {
    resultado = n * i
    console.log(`${n} x ${i} = ${resultado}`)
}

// VERIFICAÇÃO PAR OU IMPAR

function parImpar(number) {
    if (number % 2 == 0) {
        return "Par"
    } else {
        return "Impar"
    }
}

let res = parImpar(2)
console.log(res)