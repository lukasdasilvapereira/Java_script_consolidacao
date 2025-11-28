// ASYNC AWAI

async function cats(id) {
    try {
        const cat = await fetch(`https://catfact.ninja/facts?limit=100`)

        const json = await cat.json()
        const fact = json.data[id - 1]

        console.log(fact)

    } catch (error) {
        console.log(error)
    }
}

cats(50)

async function poke(id) {

    try {
        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

        const data = await pokemon.json()
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}

poke(10)