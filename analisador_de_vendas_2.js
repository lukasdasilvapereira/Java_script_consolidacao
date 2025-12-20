const vendas = [
    { id: 1, vendedor: "Ana", valor: 120 },
    { id: 2, vendedor: "João", valor: 300 },
    { id: 3, vendedor: "Ana", valor: 80 },
    { id: 4, vendedor: "Maria", valor: 200 },
    { id: 5, vendedor: "João", valor: 50 }
]


function totalVendido(t) {

    let valorN = t.map((v) => {
        return v.valor
    })
    let valorTotal = valorN.reduce((valor, total) => {
        return valor + total
    }, 0)

    return valorTotal
}

let valor = totalVendido(vendas)
console.log(valor)

function valorAcima(v) {
    let valorN = v.filter((s) => {
        return s.valor > 150
    })

    return valorN
}

let acimaValor = valorAcima(vendas)
console.log(acimaValor)

function retornarVend(r){
    let arr = []

    r.forEach(element => {
        if(!arr.includes(element.vendedor)){
            arr.push(element.vendedor)
        }   
    });

    return arr
}

let vendedores = retornarVend(vendas)
console.log(vendedores)

function vendedorQueMaisVendeu(v){
    let objeto = {}
    let maisVendeu = ""
    let contador = 0
    v.forEach(element => {
        let vendedores = element.vendedor
        let venda = element.valor
        
        if(objeto[vendedores]){
            objeto[vendedores] += venda
        } else {
            objeto[vendedores] = venda
        }
    });

    for(let i in objeto){
        if(objeto[i] > contador){
            contador = objeto[i]
            maisVendeu = i
        }
    }

    return maisVendeu
}

let vendeuMais = vendedorQueMaisVendeu(vendas)
console.log(vendeuMais)

function vendaMaisCara(v){
    let venda = vendas[0]
    let contador = 0

    v.forEach(element => {
        if(element.valor > contador){
            contador = element.valor
            venda = element
        }
    })

    return venda
}

let maisCara = vendaMaisCara(vendas)
console.log(maisCara)
