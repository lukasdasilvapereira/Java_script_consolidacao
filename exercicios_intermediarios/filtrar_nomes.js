// Filtrar nomes que começam com uma letra específica

//Dado um array de nomes, retorne apenas os que começam com a letra “A”.

let nomes = ["Ana", "Lucas", "Amanda", "Carlos", "Arthur", "Pedro"];

let x = nomes.filter((n) => {
    return n.startsWith("A")
})

console.log(x)

// Somar apenas números pares (usando reduce)

//Some somente os números pares do array.

let numeros = [1, 4, 7, 12, 8, 5, 10];

let pares = numeros.filter((p) => {
    return p % 2 == 0
})

let soma = pares.reduce((total, item) => {
    return total + item
}, 0)

console.log(soma)

//Criar uma função que recebe um array de strings e retorna o maior tamanho

//Exemplo: ["oi", "Lucas", "casa"] → retorna 5.

function arrMaior() {
    let palavras = ["javascript", "sol", "computador", "web"];

    let maiorTamanho = 0

    palavras.forEach((l) => {
        if(l.length > maiorTamanho) {
          maiorTamanho = l.length  
        }
    })

    console.log(maiorTamanho)
}

arrMaior()

// Criar uma função que retorna a média dos números

let notas = [7, 8.5, 10, 6, 9];

function media() {
    let n = notas.reduce((total, item) => {
        return total + item
    }, 0)

    let midia = n / notas.length

    console.log(midia)
}

media()

// Filtrar usuários maiores de idade e retornar apenas os nomes

let usuarios = [
    { nome: "Lucas", idade: 17 },
    { nome: "Ana", idade: 21 },
    { nome: "Diego", idade: 18 }
];


let u = usuarios.filter((n) => {
    return n.idade >= 18
})

console.log(u)