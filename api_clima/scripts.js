let city = "São Paulo"

async function getApi(nome) {
    try {
        const data = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${nome}`)

        const get = await data.json()
        
        const lat = get.results[0].latitude
        const long = get.results[0].longitude

        const weatherDate = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true
`)
        const getWeat = await weatherDate.json()

        console.log(getWeat)
    }
    catch (error) {
        console.log(error)
    }
}

console.log(getApi(city))

