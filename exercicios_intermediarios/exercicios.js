// Criar um objeto a partir de arrays

const chaves = ["nome", "idade", "cidade"];
const valores = ["Lucas", 18, "São Paulo"];

const objetoEsperado = {}

chaves.forEach((chave, indice) => {
    objetoEsperado[chave] = valores[indice]
})

console.log(objetoEsperado)

// Contar ocorrências de letras

// 👉 Receba uma string e conte quantas vezes cada letra aparece.

let sting = "banana"

const objectivo = {}

let minuscula = sting.toLowerCase()


for(let i = 0; i < minuscula.length; i++) {
    const caractere = minuscula[i]
    if (objectivo[caractere]) {
        objectivo[caractere]++
    } else {
        objectivo[caractere] = 1
    }
}

console.log(objectivo)

// 8. Simular um carrinho de compras

//Array base:

const carrinho = [
  { nome: "Livro", preco: 30, quantidade: 1 },
  { nome: "Caneta", preco: 5, quantidade: 3 },
  { nome: "Camiseta", preco: 50, quantidade: 2 }
];

let f = carrinho.map((s) => {
    return s.preco
})

let x = f.reduce((item, valor) => {
    return item + valor
}, 0)

console.log(f)
console.log(x)





