function sayName() {
    const name = "Lucas"
    function nome() {
        console.log(name)
    }
    return nome
}

const dizNome = sayName()
dizNome()

function criarContador() {
    let contador = 0

    return () => {
        console.log(contador)
        contador++
    }
}

const contadora = criarContador()

contadora()
contadora()
contadora()

function soma(num1) {
    return(num2) => {
        if(!num2) {
            return num1
        }
        return num1 + num2
    }
}

console.log(soma(3)(4))