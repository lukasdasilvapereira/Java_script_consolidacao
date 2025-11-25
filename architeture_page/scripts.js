const imagens = [
    "image0.jpg",
    "image1.jpg",
    "image2.jpg",
    "image3.jpg"
]

let imagem = document.querySelector(".imagem")

let index = 0


const n1 = document.querySelector(".n1")

function frente() {
    index++
    imagem.src = `${imagens[index]}`
    n1.innerHTML = `${index}/3`
    if(index >= 3) {
        index--
    }
}

function atras() {
    imagem.src = `${imagens[index - 1]}`
    n1.innerHTML = `${index}/3`
    index--
    if(index < 0) {
        index++
    }
}