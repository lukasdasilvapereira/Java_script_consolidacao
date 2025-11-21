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

//8. Transformar um array de strings em objeto
//Transforme o array abaixo em um objeto onde a chave é o índice.

let frutas = ["banana", "maçã", "uva"];

let f = Object.assign({}, frutas)

console.log(f)

// Agrupar por propriedade

//Agrupe os usuários por cidade e retorne um objeto onde cada chave é uma cidade.

let usuarios = [
    { nome: "Lucas", cidade: "São Paulo" },
    { nome: "Ana", cidade: "Rio" },
    { nome: "Bruno", cidade: "São Paulo" },
    { nome: "Carla", cidade: "Rio" }
];

let cidades = {}

usuarios.forEach(usuario => {
    let cidade = usuario.cidade

    if(!cidade[cidade]) {
        cidades[cidade] = []
    }

    cidades[cidade].push(usuario)
})

console.log(cidades)




