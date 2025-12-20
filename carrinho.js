const compras = [
    { produto: "Teclado", preco: 150 },
    { produto: "Mouse", preco: 80 },
    { produto: "Monitor", preco: 900 },
    { produto: "Headset", preco: 200 }
]



function objetoFinal(lista) {
    let list = lista.length
    let valorTotal = 0
    let produtoMaisCaro = lista[0]
    let contador = 0

    lista.forEach(element => {
        let elemento = element.preco
        valorTotal += elemento

        if (elemento > contador) {
            contador = elemento
            produtoMaisCaro = element
        }
    });

    return {
        totalProdutos: list,
        valorTotal: valorTotal,
        produtoMaisCaro: produtoMaisCaro
    }
}

let objeto = objetoFinal(compras)
console.log(objeto)

const carrinho = [
    { produto: "Camisa", preco: 50, quantidade: 2 },
    { produto: "Calça", preco: 120, quantidade: 1 },
    { produto: "Tênis", preco: 300, quantidade: 1 },
    { produto: "Camisa", preco: 50, quantidade: 1 },
    { produto: "Boné", preco: 40, quantidade: 3 }
]

function unificarProdutos(lista) {
    let produtos = {}

    lista.forEach(element => {
        const nome = element.produto
        if(produtos[nome]){
            produtos[nome] += element.quantidade
            produtos[nome].preco += element.preco * element.quantidade 
        } else {
            produtos[nome] ={
                produto: element.produto,
                preco: element.preco * element.quantidade,
                quantidade: element.quantidade
            }
        }
    })

    return Object.values(produtos)
}

console.log(unificarProdutos(carrinho))