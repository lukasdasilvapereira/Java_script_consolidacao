const vendas = [
    { produto: "Camisa", categoria: "Roupas", valor: 79.90, data: "2024-11-01" },
    { produto: "Tênis", categoria: "Calçados", valor: 199.90, data: "2024-11-02" },
    { produto: "Calça", categoria: "Roupas", valor: 120.00, data: "2024-11-03" },
    { produto: "Boné", categoria: "Acessórios", valor: 49.90, data: "2024-11-03" },
    { produto: "Tênis", categoria: "Calçados", valor: 199.90, data: "2024-11-04" }
];


function faturamentoTotal(v) {
    let x = v.reduce((valor, total) => {
        return valor + total
    }, 0)

    return x
}

function faturamentoCategoria(v) {
    let objeto = {}

    v.forEach(element => {
        const categoria = element.categoria
        const valor = element.valor

        if (objeto[categoria]) {
            objeto[categoria] += valor
        } else {
            objeto[categoria] = valor
        }
    });

    return objeto
}

function produtoMaisVendido(produto) {
    let objeto = {}
    let contador = 0
    let maisVendido = ""
    let x = produto.map((s) => {
        return s.produto
    })

    x.forEach(element => {
        if (objeto[element]) {
            objeto[element]++
        } else {
            objeto[element] = 1
        }
    })

    for (let produtos in objeto) {
        if (objeto[produtos] > contador) {
            contador = objeto[produtos]
            maisVendido = produtos
        }
    }

    return maisVendido

}

function diaMaisVendido(dia) {
    let objeto = {}
    let diaMais = ""
    let contador = 0

    dia.forEach(element => {
        const morning = element.data
        const valores = element.valor

        if (objeto[morning]) {
            objeto[morning] += valores
        }
        else {
            objeto[morning] = valores
        }

    })

    for (let days in objeto) {
        if (objeto[days] > contador) {
            contador = objeto[days]
            diaMais = days
        }
    }

    return diaMais
}

let x = diaMaisVendido(vendas)
console.log(x)
