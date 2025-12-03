let movieName = "Titanic"

async function getMovie(nome) {
    try {
        const data = await fetch(`https://www.omdbapi.com/?apikey=4a3b711b&t=${nome}`)

        const get = await data.json()
        console.log(get)
    } catch (error) {
        console.log(error)
    }
}

getMovie(movieName)