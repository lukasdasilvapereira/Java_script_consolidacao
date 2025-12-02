let nome = "Lucas"
let pass = "12355"
let tentativas = 3

function validacao(login, senha) {

    if (tentativas === 0) {
        return "Sistema bloqueado"
    }

    if (login == nome && senha == pass) {
        return `Logado com sucesso: nome: ${login}, senha: ${senha}`
    }

    tentativas--

    if (tentativas === 0) {
        return "Sistema bloqueado"
    }

    return `Usuário ou senha incorretas, tente novamente, tentativas disponíveis ${tentativas}`
}

console.log(validacao("lucas", 784854))
console.log(validacao("lucas", 555))
console.log(validacao(nome, pass))

