let hours = document.querySelector(".hours")
let minutes = document.querySelector(".minutes")
let seconds = document.querySelector(".seconds")

let h = 0
let s = 0
let m = 0

let intervalo

function cronometro() {
    s++

    if(s == 60) {
        s = 0
        m++
    }

    if(m == 60) {
        m = 0
        h++
    }

    hours.innerHTML = String(h).padStart("2", 0)
    minutes.innerHTML = String(m).padStart("2", 0)
    seconds.innerHTML = String(s).padStart("2", 0)

}

function start() {
   intervalo = setInterval(() => {
    cronometro()
   }, 1000);
}

function pause(){
    clearInterval(intervalo)
    intervalo = null
}

function delet() {

    clearInterval(intervalo)
    intervalo = null

    h = 0
    s = 0
    m = 0

    hours.innerHTML = "00"
    minutes.innerHTML = "00"
    seconds.innerHTML = "00"
}

