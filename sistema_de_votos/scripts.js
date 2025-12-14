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

function reset() {
    setTimeout(() => {
        totalVotos = 0
        contadorSanti = 0
        contadorJake = 0
        contadorHolt = 0

        totalJake.innerHTML = `Jake: 0`
        totalHolt.innerHTML = `Holt: 0`
        totalSanti.innerHTML = `Santiago: 0`
        total.innerHTML = `Total de votos: 0`
        vencedor.innerHTML = "Vencedor: -"
    }, 3000);
}

function mostrar() {
    if (contadorJake > contadorSanti && contadorJake > contadorHolt) {
        vencedor.innerHTML = "Vencedor: Jake"
        reset()
        return
    }

    if (contadorSanti > contadorJake && contadorSanti > contadorHolt) {
        vencedor.innerHTML = "Vencedor: Santiago"
        reset()
        return
    }

    if (contadorHolt > contadorJake && contadorHolt > contadorSanti) {
        vencedor.innerHTML = "Vencedor: Holt"
        reset()
        return
    }

    vencedor.innerHTML = "Vencedor: Empate"
    reset()
}