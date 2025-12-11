let moeda = "USD"

async function converter(moedaBase){
    const data = await fetch(`https://api.exchangerate-api.com/v4/latest/${moedaBase}`)

    const dados = await data.json()

    let taxa = dados.rates[moedaDestino]

    console.log(dados)
    console.log(taxa)
}

converter(moeda)