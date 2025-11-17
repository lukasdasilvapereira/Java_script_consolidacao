let main = document.querySelector(".main")
let hours = document.querySelector(".hours")
let minutes = document.querySelector(".minutes")
let seconds = document.querySelector(".seconds")

function atualizaHorario() {
    let agora = new Date()
    let horas = agora.getHours()
    let minutos = agora.getMinutes()
    let segundos = agora.getSeconds()

    hours.innerHTML = horas;
    minutes.innerHTML = minutos;
    seconds.innerHTML = segundos;

    if (horas < 10) {
        hours.innerHTML = (`0:${horas}`);
    } else if (minutos < 10) {
        minutes.innerHTML = (`0:${minutos}`);
    } else if (segundos < '10') {
        seconds.innerHTML = (`0:${segundos}`)
    }
}

setInterval(() => {
    atualizaHorario()
}, 1000);