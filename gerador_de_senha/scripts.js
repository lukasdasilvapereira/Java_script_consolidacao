let size = document.getElementById("tamanho")
let len = document.querySelector(".len")
let num = "123456789"
let letmaiscu = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let letmin = letmaiscu.toLowerCase()
let simbols = "!@#$%¨&*()_+=?/<>"
let inputMaiscula = document.getElementById("maiusculas")
let inputMinusculas = document.getElementById("minusculas")
let inputNumbers = document.getElementById("numbers")
let inputSimbols = document.getElementById("simbols")
let pass = document.querySelector(".senha_gerada")
let btnCopy = document.querySelector(".copy")

size.addEventListener("input", () => {
    len.innerHTML = size.value
})


function gerar() {
    let tamanho = Number(size.value)
    let caracteres = ""

    if (inputMaiscula.checked) caracteres += letmaiscu;
    if (inputMinusculas.checked) caracteres += letmin;
    if (inputNumbers.checked) caracteres += num;
    if (inputSimbols.checked) caracteres += simbols;

    if (caracteres == "") {
        alert("Escolha alguma das alternativas por favor")
        return
    }

    let senhaFinal = ""

    for (let i = 0; i < tamanho; i++) {
        let aleatorio = Math.floor(Math.random() * caracteres.length)
        senhaFinal += caracteres[aleatorio]
    }

    pass.innerHTML = senhaFinal
}

btnCopy.addEventListener("click", () => {
    const senha = pass.innerHTML; // ou innerText
    navigator.clipboard.writeText(senha)
        .then(() => {
            alert("Copiado!");
        })
        .catch(() => {
            alert("Erro ao copiar");
        });
});
