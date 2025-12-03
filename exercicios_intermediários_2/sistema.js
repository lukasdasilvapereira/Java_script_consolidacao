const vendas = [
    { vendedor: "Lucas", qtd: 10, preco: 50, cidade: "São Paulo", meta: true },
    { vendedor: "Ana", qtd: 5, preco: 120, cidade: "São Paulo", meta: false },
    { vendedor: "Marcos", qtd: 7, preco: 80, cidade: "Curitiba", meta: true },
    { vendedor: "Julia", qtd: 12, preco: 40, cidade: "Rio", meta: true },
    { vendedor: "Pedro", qtd: 3, preco: 200, cidade: "Curitiba", meta: false }
];


function gerarRelatorio(client) {
    let whoDid = client.filter((s) => s.meta == true)

    whoDid.forEach(element => element.valorTotal = element.qtd * element.preco);

    whoDid.sort((a, b) => b.valorTotal - a.valorTotal)

    let totalArrecadado = whoDid.reduce((a, b) => {
        return a + b.valorTotal
    }, 0)

    let totalItensVendidos = client.reduce((a, c) => a + c.qtd ,0)

    let cities = [...new Set(client.map(v => v.cidade))]

    let topVendedor = whoDid.reduce((a, c) => a.valorTotal > c.valorTotal ? a : c)

    return {
        totalArrecadado,
        totalItensVendidos,
        vendedoresMeta: whoDid,
        cities,
        topVendedor,
        vendedoresProcessados: whoDid
    }
}

console.log(gerarRelatorio(vendas))