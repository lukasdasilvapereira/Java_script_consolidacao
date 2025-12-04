async function find() {
    let inputValue = document.getElementById("text").value

    let divValue = document.querySelector(".movies")

    if (!inputValue.trim()) {
        alert("Digite algo")
        return
    }

    try {
        const data = await fetch(`https://www.omdbapi.com/?apikey=4a3b711b&t=${inputValue}`)

        const get = await data.json()

        if (get.response === "False") {
            divValue.innerHTML = "<p>Movie not found</p>"
            return
        }

        divValue.innerHTML = ` 
        <div class="movie-box">
        <img src="${get.Poster}" width="200">
            <div>
                <h2>${get.Title}</h2>
                <p>Year: ${get.Year}</p>
                <p>IMDB: ${get.imdbRating}</p>
                <p>Actors: ${get.Actors}</p>
            </div>
        </div>
        `
        divValue.style.display = "flex"
    } catch (error) {
        alert(error)
    }
}