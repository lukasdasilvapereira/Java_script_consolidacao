const pedidos = [
    { id: 1, cliente: "Ana", itens: 3, valor: 120 },
    { id: 2, cliente: "João", itens: 1, valor: 40 },
    { id: 3, cliente: "Ana", itens: 2, valor: 80 },
    { id: 4, cliente: "Maria", itens: 5, valor: 200 },
    { id: 5, cliente: "João", itens: 4, valor: 160 }
];


function valorTotal(v) {
    let n = v.map((s) => {
        return s.valor
    })

    let rdc = n.reduce((valor, total) => {
        return valor + total
    }, 0)

    return rdc
}

let totalValor = valorTotal(pedidos)
console.log(totalValor)

function valorCliente(s) {
    let objeto = {}
    s.forEach(element => {
        let clt = element.cliente
        let vlor = element.valor

        if (objeto[clt]) {
            objeto[clt] += vlor
        } else {
            objeto[clt] = vlor
        }
    });

    return objeto
}

let clienteValor = valorCliente(pedidos)
console.log(clienteValor)

function clienteMaisGastou(c) {
    let contador = 0
    let clienteMais = ""

    let objeto = {}
    c.forEach(element => {
        let clt = element.cliente
        let vlor = element.valor

        if (objeto[clt]) {
            objeto[clt] += vlor
        } else {
            objeto[clt] = vlor
        }
    });

    for(let i in objeto){
        if(objeto[i] > contador){
            contador = objeto[i]
            clienteMais = i
        }
    }

    return clienteMais
}

let cliente = clienteMaisGastou(pedidos)
console.log(cliente)

function itensPedidos(i){
    let objeto = pedidos[0]
    let contador = 0

    i.forEach(element => {
        if(element.itens > contador){
            contador = element.itens
            objeto = element
        }
    })

    return objeto
}

let pedidosItens = itensPedidos(pedidos)
console.log(pedidosItens)

// MAIOR PREÇO

const produtos = [
  { id: 1, nome: "Camisa", preco: 80 },
  { id: 2, nome: "Tênis", preco: 200 },
  { id: 3, nome: "Boné", preco: 50 },
  { id: 4, nome: "Calça", preco: 120 }
];


function maiorPreco(m){
    let maior = produtos[0]
    let contador = 0

    m.forEach(element => {
        if(element.preco > contador){
            contador = element.preco
            maior = element
        }
    })

    return maior
}

let precoMaior = maiorPreco(produtos)
console.log(precoMaior)
