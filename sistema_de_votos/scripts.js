let contadorJake = 0
let contadorSanti = 0
let contadorHolt = 0
let totalVotos = 0
let total = document.querySelector(".total")
let totalJake = document.querySelector(".totalA")
let totalSanti = document.querySelector(".totalB")
let totalHolt = document.querySelector(".totalC")
let vencedor = document.querySelector(".winner")

function jake() {
    contadorJake++
    totalVotos++
    totalJake.innerHTML = `Jake: ${contadorJake}`
    total.innerHTML = `Total de votos: ${totalVotos}`
}

function santi() {
    contadorSanti++
    totalVotos++
    totalSanti.innerHTML = `Santiago: ${contadorSanti}`
    total.innerHTML = `Total de votos: ${totalVotos}`
}

function holt() {
    contadorHolt++
    totalVotos++
    totalHolt.innerHTML = `Holt: ${contadorHolt}`
    total.innerHTML = `Total de votos: ${totalVotos}`
}

function mostrar() {
    if (totalJake.value > totalSanti.value && totalHolt.value) {
        vencedor.innerHTML = "Jake"

    } 
    
    if (totalSanti.value > totalJake.value && totalHolt.value) {
        vencedor.innerHTML = "Santiago"
    }

    if (totalHolt.value > totalJake.value && totalSanti.value) {
        vencedor.innerHTML = "Holt"
    }


    total = 0
    totalJake = 0
    totalSanti = 0
    totalHolt = 0
}