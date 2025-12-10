function calcular() {
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    let nota3 = Number(document.getElementById("nota3").value)

    let media = document.querySelector(".media")
    let maiorNota = document.querySelector(".maior")
    let menorNota = document.querySelector(".menor")
    let situacao = document.querySelector(".situacao")


    let list = [nota1, nota2, nota3]

    let maiorNumero = Math.max(...list)
    let menor = Math.min(...list)

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert("Digite um número")
        return
    }

    if (nota1 < 0 || nota1 > 10 ||
        nota2 < 0 || nota2 > 10 ||
        nota3 < 0 || nota3 > 10
        ) {
        alert("Digite números de 0 a 10")
        return
    }
    
    let calculateMedia = Math.round((nota1 + nota2 + nota3) / 3)

    media.innerHTML = `<p class="media">Média: ${calculateMedia}</p>`

    maiorNota.innerHTML = `<p class="maior">Maior nota: ${maiorNumero}</p>`

    menorNota.innerHTML = `<p class="menor">Menor nota: ${menor}</p>`

    if (calculateMedia < 5) {
        situacao.innerHTML = `<p class="situacao"><strong>Situação: Reprovado</strong></p>`
    } else if (calculateMedia <= 7) {
        situacao.innerHTML = `<p class="situacao"><strong>Situação: Recuperação</strong></p>`
    } else {
        situacao.innerHTML = `<p class="situacao"><strong>Situação: Aprovado</strong></p>`
    }
}