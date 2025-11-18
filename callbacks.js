function multi(values, func) {
    for(let i = 0; i < values.length; i++) {
        values[i] = func(values[i])
    }
    return values
}

const values = [1, 2, 5, 8, 10, 13, 18]
const func = (n) => n * n

console.log(multi(values, func))

function saudacao(mensagem) {
    console.log("Recebemos a mensagem:", mensagem)
}

function outraSaudacao(nome, callback) {
    const saudacaoCompleta = `Olá ${nome}, Tudo bem?`

    callback(saudacaoCompleta)
}

outraSaudacao("Lucas", saudacao)


function executarAcao(string) {
    console.log("Mensagem Recebida:", string)
}

function acaoConcluida(callback) {
    const msg = "Bom dia, estamos ao vivo"

    callback(msg)
}

acaoConcluida(executarAcao)
