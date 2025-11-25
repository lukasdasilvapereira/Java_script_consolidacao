// FOR EACH É UMA ESTRUTURA DE REPETIÇÃO QUE PERCORRE UM ARRAY, MAIS RECOMENDADO PARA USAR EM MANIPULAÇÕES, PQ ELES NÃO RETORNAM NENHUM VALOR

// let pessoas = [
//     {nome : "Lucas", age: 19},
//     {nome : "Fábio", age: 45},
//     {nome : "Carlos", age: 29},
// ]

// pessoas.forEach((nomes, indice, array) => {
//     console.log(nomes, array, indice)
// })

let produtos = [
    {produto: "Notebook", price: 5000, descount: 0.35},
    {produto: "TV", price: 3500, descount: 0.25},
    {produto: "Microondas", price: 1300, descount: 0.15},
    {produto: "Geladeira", price: 4500, descount: 0.55},
]

produtos.forEach((produtoAtual) => {
    let valorDesconto = produtoAtual.price * produtoAtual.descount
    let valorAtual = produtoAtual.price - valorDesconto
    produtoAtual.valorTotalProduto = valorAtual
    console.log(produtoAtual)
})