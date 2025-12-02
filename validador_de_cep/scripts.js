let nome = document.getElementById("name").value
let cep = document.getElementById("cep").value
let submit = document.getElementById("submit")
let resposta = document.querySelector(".resposta")

submit.addEventListener(("click"), () => {
    async function getCep() {
        const data = await fetch(`https://viacep.com.br/ws/${cep}/json/`)

        const json = await data.parse(data)
        resposta.innerHTML = `Você mora: ${json}`
    }
    return getCep()
})
