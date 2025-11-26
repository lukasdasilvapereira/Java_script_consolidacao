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

