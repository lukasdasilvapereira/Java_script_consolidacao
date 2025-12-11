async function converter(){
    let inputValor = document.getElementById("valor").value
    let selectValue = document.getElementById("moedas").value
    let outroValor = document.getElementById("outra").value
    let resultado = document.querySelector(".resultado")

    if(!inputValor.trim()){
        alert("Digite algum número")
        return
    }

    if(isNaN(inputValor)){
        alert("Digite um número")
        return
    }

    const data = await fetch(`https://api.exchangerate-api.com/v4/latest/${selectValue}`)

    const dados = await data.json()

    let taxa = dados.rates[outroValor]
    let conversao = (inputValor * taxa).toFixed(2)

    resultado.innerHTML = `Resultado: ${selectValue} ${inputValor} => ${outroValor} ${conversao}`
}
