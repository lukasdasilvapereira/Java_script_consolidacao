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

function contarLetras(n) {
    let contador = 0
    let objeto = {}
    let grandes = "abcdefghijklmnopqrstuvwxyz"

    for (let i = 0; i < n.length; i++) {
        let letra = n[i]
        if (grandes.includes(letra)) {
            contador++
            objeto[letra]++
            objeto[letra] = contador
        }
    }

    return objeto
}

console.log(contarLetras(letras))