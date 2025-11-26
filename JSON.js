// JSON
// CAMBIO DE DADOS STRINGIFY, PARSE
// MUDA DE STRING PARA OBJ E VICE E VERSA, CRIANDO UM NOVO OBJETO OU STRING COM OS MESMOS ELEMENTOS


const person = {
    nome: "Lucas",
    age: 19,
    isProgrammer: true,
    city: "Nova Iguaçu",
    address: {
        street: "Rua Grajáu",
        neighborhood: "Cerâmica",
    },
    married: null
}

let mudarParaString = JSON.stringify(person)
//console.log(mudarParaString)

let mudarParaObjeto = JSON.parse(mudarParaString)
console.log(mudarParaObjeto)

// EXERCÍCIOS


let json = `
[
  {"produto":"Camisa", "preco":50},
  {"produto":"Tênis", "preco":200},
  {"produto":"Meias", "preco":20}
]
`;

let x = JSON.parse(json)

let f = x.filter((s) => {
    return s.preco > 50
})

console.log(f)

// 2º 
let rd = x.map((p) => {
    return p.preco 
})

console.log(rd)

let rdce = rd.reduce((total, item) => {
    return total + item
}, 0)

console.log(rdce)

// 3º 
let carrinho = '[{"item":"Mouse","preco":80}]';

let convert = JSON.parse(carrinho)

convert.push([{"item": "Monitor", "preco": 2000}]);

console.log(convert)

// 4º 

function receberIdadeENome(nome, idade) {

    let person = {
        nome: nome,
        idade: idade
    }

    return JSON.stringify(person)
}
console.log(receberIdadeENome("Lucas", 19))