// 1

function contando() {
    let contador = 0

    function c() {
        console.log(contador)
        contador++
    }
    return c
}

const cnt = contando()
cnt()
cnt()
cnt()

// 2

function multi(num1) {
    function mt(num2) {
        return num1 * num2
    }
    return mt
}

console.log(multi(5)(10))

// 3

function nomes() {
    let name = "Lucas"
    function showName() {
        console.log(name)
    }

    return showName
}

const nome = nomes()
nome()

// 4

function cofres(num1) {
    let cofre = 0
    function c() {
        let soma = cofre + num1
        cofre = soma
        console.log(cofre)
    }
    return c
}

const x = cofres(100)
x()
x()
x()

// 5

function message() {
    let mensagem = "Olá"
    function retornaMensagem() {
        console.log(`Mensagem enviada: ${mensagem}`)
    }

    return retornaMensagem
}

const m = message()
m()

// 6

function contadorComReset() {

    let contador = 0

    function ativar() {
    contador++
    console.log(contador)
    }

    function reset() {
        contador = 0
        console.log(contador)
    }

    return {ativar, reset}
}

const c = contadorComReset()
c.ativar()
c.ativar()
c.ativar()
c.ativar()
c.reset()
c.ativar()
