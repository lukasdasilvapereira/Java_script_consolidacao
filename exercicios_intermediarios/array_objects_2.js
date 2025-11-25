//Filtrar usuários ativos

//Dado um array de objetos com {nome, ativo}, retorne apenas os usuários onde ativo === true.

let arr = [
    { nome: "Lucas", ativo: false },
    { nome: "Carlos", ativo: true },
    { nome: "João", ativo: false },
    { nome: "Maria", ativo: true },
]

let a1 = arr.filter((n) => {
    return n.ativo === true
})

console.log(a1)

// MÉDIA

let media = [
    { nome: "Ana", idade: 20 },
    { nome: "Lucas", idade: 18 },
    { nome: "Maria", idade: 42 }
]

let r = media.reduce((total, item) => {
    return item.idade + total
}, 0)

let midia = Math.round(r / media.length)

console.log(`A média de idade dessas pessoas é ${midia}`)

// Criar um novo array com apenas as iniciais

let ar = ["Lucas", "Fernanda", "Beatriz"]


let c = ar.map((x) => {
    let b = [x[0]]
    return b
})

console.log(c)



