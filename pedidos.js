const pedidos = [
  { id: 1, cliente: "Ana", valor: 25 },
  { id: 2, cliente: "João", valor: 40 },
  { id: 3, cliente: "Maria", valor: 15 },
  { id: 4, cliente: "Pedro", valor: 60 }
]


function valorTotal(v){
    let f = v.map((s) => {
        return s.valor
    })

    let rdc = f.reduce((valor, total) => {
        return valor + total
    }, 0)

    return rdc
}

let totalValor = valorTotal(pedidos)
console.log(totalValor)

function retorneValores(r){
    let valorAcima = r.filter((s) => {
        return s.valor > 30
    })

    return valorAcima
}

let retorne = retorneValores(pedidos)
console.log(retorne)

function criarNovo(c){
    let nomes = []

    let clientes = c.filter((s) => {
        nomes.push(s.cliente)
    })

    return nomes
}

let novoCriar = criarNovo(pedidos)
console.log(novoCriar)

function maisCaro(m){
    let pedidoMaisCaro = m[0]

    m.forEach(element => {
        if(element.valor > pedidoMaisCaro.valor){
            pedidoMaisCaro = element
        }
    });

    return pedidoMaisCaro
}

let caroMais = maisCaro(pedidos)
console.log(caroMais)

