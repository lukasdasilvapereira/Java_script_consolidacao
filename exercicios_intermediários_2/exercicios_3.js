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


// 2

let nomes = ["Ana", "Bruno", "Carolina", "Igor", "Paula", "Zé", "Cristiano"];

function ordenar(lista) {
    let n = lista
        .filter((s) => s.length > 4)
        .map((s) => s.toUpperCase())


    n.sort()

    return n
}


console.log(ordenar(nomes))


// SISTEMA DE ESTOQUE

const produtos = [
    { nome: "mouse", preco: 50, quantidade: 10 },
    { nome: "teclado", preco: 120, quantidade: 5 },
    { nome: "monitor", preco: 900, quantidade: 2 },
    { nome: "headset", preco: 200, quantidade: 0 },
    { nome: "webcam", preco: 150, quantidade: 3 }
];

function gerarRelatorios(produto) {
    let l = produto.filter((s) => {
        return s.quantidade > 0
    })

    l.sort((a, b) => {
        return b.preco - a.preco
    })

    l.forEach(product => {
        product.valorTotal = product.preco * product.quantidade
    });

    return l
}

console.log(gerarRelatorios(produtos))

// SISTEMA DE CADASTRO E RELATÓRIO

const usuarios = [
    { nome: "Lucas", idade: 18, ativo: true, cidade: "São Paulo" },
    { nome: "Marcos", idade: 25, ativo: false, cidade: "Rio de Janeiro" },
    { nome: "Julia", idade: 30, ativo: true, cidade: "Curitiba" },
    { nome: "Ana", idade: 19, ativo: true, cidade: "São Paulo" },
    { nome: "Pedro", idade: 40, ativo: false, cidade: "Salvador" }
];

function sistem(arr){
    let a = arr.filter((ativos) => {
        return ativos.ativo == true
    })

    a.sort((b, c) => {
        return c.idade - b.idade
    })

    a.forEach(age => {
        age.categoriaIdade = age.idade < 20 ? "Jovem":
                            age.idade < 35 ? "Adulto": "Senior"
    })

    let b = a.filter((usuarios) => {
        return usuarios.ativo == true
    })

    let cidades = {}

    a.forEach(cities => {
        if(cidades[cities.cidade]){
            cidades[cities.cidade]++
        }
        else {
            cidades[cities.cidade] = 1
        }
    })

    return {
        usuariosAtivos: b.length,
        cidades: cidades,
        usuariosPermitidos: a
    }
}

console.log(sistem(usuarios))
