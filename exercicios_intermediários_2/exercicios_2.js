// 1

let string = "Banana"

// retornar quantidade de vogais a que tem na string

function encontrar(n) {
    let contador = 0
    let letra = "a"
    for (let i = 0; i < n.length; i++) {
        if (letra.includes(n[i])) {
            contador++
        }
    }
    return contador
}

console.log(encontrar(string))

// 2

let str = "Kotlin"

// contar quantidade de vogais

function encontrarVogais(n) {
    let contador = 0
    let vogais = "aeiouAEIOU"
    let vogaisNovas = vogais.toLowerCase()
    for (let i = 0; i < n.length; i++) {
        if (vogaisNovas.includes(n[i])) {
            contador++
        }
    }
    return contador
}

console.log(encontrarVogais(str))

// 3

// contar quantas vezes cada vogal aparece

let tr = "programacao"

// quantidade de vezes que uma vogal aparece

function contar(n) {
    let objeto = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0
    }
    let vogais = "aeiou"

    for (let i = 0; i < n.length; i++) {
        let letra = n[i]
        if (vogais.includes(letra)) {
            objeto[letra]++
        }
    }

    return objeto


}
console.log(contar(tr))

let letras = "banana"

function contarLetras(str) {
    let objeto = {
    }

    for (let i = 0; i < str.length; i++) {
        let letra = str[i]
        if (objeto[letra]) {
            objeto[letra]++
        } else {
            objeto[letra] = 1
        }
    }

    return objeto
}

console.log(contarLetras(letras))

// NOVO 

let frase = "o rato roeu a roupa do rei de roma";

function fraseContar(n) {
    let s = n.split(' ')
    let objeto = {}

    s.forEach(element => {
        if (objeto[element]) {
            objeto[element]++
        } else {
            objeto[element] = 1
        }
    });
    return objeto
}

console.log(fraseContar(frase))

// NUMEROS

let numeros = [2, 5, 2, 8, 5, 5, 3, 8, 9, 2];

function contarNum(n) {
    let objeto = {}

    n.forEach(num => {
        if (objeto[num]) {
            objeto[num]++
        } else {
            objeto[num] = 1
        }
    })

    return objeto
}

console.log(contarNum(numeros))

// PAR

let nums = [7, 15, 22, 4, 9, 30, 17, 41, 2, 18];

function encontrarPar(n) {
    let maiorPar = null

    n.forEach(num => {
        if(num % 2 == 0){
            if(maiorPar == null || num > maiorPar){
                maiorPar = num
            }
        }
    })
    return maiorPar
}

console.log(encontrarPar(nums))

