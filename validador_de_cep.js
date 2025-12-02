async function getCep(cep) {
    try {
        const data = await fetch(`https://viacep.com.br/ws/${cep}/json/`)

        const response = await data.json()
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

getCep("01001000")