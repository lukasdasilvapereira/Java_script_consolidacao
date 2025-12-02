let repost = document.querySelector(".resposta")

async function getCep(cep) {
    try {
        const data = await fetch(`https://viacep.com.br/ws/${cep}/json/`)

        const response = await data.json()
        //repost.innerHTML = response
        repost.innerHTML = ` <p><strong>CEP:</strong> ${response.cep}</p>
            <p><strong>Rua:</strong> ${response.logradouro}</p>
            <p><strong>Bairro:</strong> ${response.bairro}</p>
            <p><strong>Cidade:</strong> ${response.localidade} - ${response.uf}</p>
        `;
    } catch (error) {
        //alert(error)
    }
}

function buscar(){
    let inputValue = document.getElementById("cep").value
    let nome = document.getElementById("name").value 

    localStorage.setItem("nome", nome, "cep", cep)

    if (!inputValue || inputValue.length !== 8) {
        alert("Digite um CEP válido!");
        return;
    }


    getCep(inputValue)
}

buscar()
