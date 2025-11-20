let produtos = [
    { nome: "Camiseta", preco: 30 },
    { nome: "Tênis", preco: 120 },
    { nome: "Livro", preco: 60 },
    { nome: "Boné", preco: 25 }
];

let x = produtos.filter((p) => {
    return p.preco > 50
})

console.log(x)

// Contar quantas vezes cada número aparece

let numeros = [1, 2, 2, 3, 3, 3, 4, 5, 5];

let contador = {}

numeros.forEach(num => {
    if(contador[num] == undefined) {
        contador[num] = 1
    }
    else {
        contador[num]++
    }
})

console.log(contador)

// Ordenar objetos

// Ordene o array de pessoas pela idade (da menor para a maior).

let pessoas = [
    { nome: "Ana", idade: 25 },
    { nome: "João", idade: 19 },
    { nome: "Carlos", idade: 30 }
];


pessoas.sort((a, b) => a.idade - b.idade)

console.log(pessoas)


