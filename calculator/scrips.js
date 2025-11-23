let ipt = document.getElementById("texto")

function clicar(input) {
    ipt.value += input
}

function limpar() {
    ipt.value = ""
}

function calcular() {
    try {
        ipt.value = eval(ipt.value)
    } catch (error) {
        alert(error)
        ipt.value = ""
    }
}