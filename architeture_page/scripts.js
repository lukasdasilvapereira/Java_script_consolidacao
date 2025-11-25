const imagens = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg"
]

let imagem = document.querySelector(".imagem")

let index = 1


const n1 = document.querySelector(".n1")

function frente() {
    imagem.src = `${imagens[index]}`
    index++
    n1.innerHTML = `${index}/4`
    if(index >= 4) {
        index--
    }
}

function atras() {
    imagem.src = `${imagens[index - 1]}`
    n1.innerHTML = `${index}/4`
    index--
    if(index <= 0) {
        index++
    }
}