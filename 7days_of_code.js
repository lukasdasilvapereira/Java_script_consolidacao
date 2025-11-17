function aparecePrompt() {
    let areas = prompt("Escolha a opção: 1 - Se deseja seguir a área front-end, 2 - Se você deseja seguir a área Back-end")
    console.log(areas)

    if (areas == '1') {
        let techFront = prompt("Escolha a opção: 1- Se você prefere React, 2 - Se você prefere Vue")
        console.log(techFront)
    } else if (areas == '2') {
        let techBack = prompt("Escolha a opção: 1 - Se Você prefere C#, 2 - Se você prefere Java")
        console.log(techBack)
    }
    else {
        alert("Você não selecionou uma opção válida")
    }

    let lista = []

    let fullstack = prompt("Escolha a opção: 1 - Se deseja seguir a área escolhida, 2 - Se você deseja futuramente se tornar um fullstack")

    let aprenderMais = prompt("Tem mais alguma tecnologia que você queira aprender? 1- Sim ou 2- Não")

    while (aprenderMais == "1") {
        let novaTech = prompt(`Me conte qual tecnologia você quer aprender: `)
        lista.push(novaTech)
        let x = prompt(`Que legal que você quer estudar ${novaTech}, Tem mais alguma? 1- Sim, 2- Não. Lista de aprendizado: ${lista}`)
        if (x == '1') {
            ///
        }
        else if (x == '2') {
            aprenderMais = "2"
            alert(`Bons estudos!!, Lista de estudos: ${lista}`)
        }
        else {
            ////
        }
    }

}