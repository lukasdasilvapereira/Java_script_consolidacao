// 1

const numeros = [3, 22, 7, 15, 9];

function encontrarMaior(arr) {
    let maior = arr[0]

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > maior) {
            maior = arr[i]
        }
        return maior
    }

}

console.log(encontrarMaior(numeros))

// 2 

const palavras = ["carro", "javascript", "sol", "elefante"];

function contar(arr) {
    let list = 0

    for(let i = 0; i < arr.length; i++)

    if(arr[i].length > 5) {
        list++
    }

    return list
}

console.log(contar(palavras))

// 3

const pessoas = [
  { nome: "Lucas", idade: 18 },
  { nome: "João", idade: 16 },
  { nome: "Maria", idade: 22 }
];

let s = pessoas.filter((s) => {
    return s.idade >= 18 
})

console.log(s)

// 4

let string = "Olá"

function inverterString(str) {
    let x = str.split("").reverse("").join("")
    return x
}

console.log(inverterString(string))

// 5

let stri = "javascript"
let vogais = "aeiou"

function contarVogais(n) {
    let contador = 0

    for(let i = 0; i <= n.length; i++) {
      if(vogais.includes(n[i])){
        contador++
      }
    }

    return contador
}

console.log(contarVogais(stri))

// 6

const nomes = ["lucas", "ana", "joão"];

let x = nomes.map((n) => {
    return n.toUpperCase()
})

console.log(x)

// 6

const pedidos = [
    { id: 1, cliente: "Lucas", itens: [ { produto: "Mouse", qtd: 2, preco: 50 }, { produto: "Teclado", qtd: 1, preco: 120 } ], pago: true },
    { id: 2, cliente: "Ana", itens: [ { produto: "Monitor", qtd: 1, preco: 900 } ], pago: false },
    { id: 3, cliente: "Julia", itens: [ { produto: "Headset", qtd: 2, preco: 200 }, { produto: "Mousepad", qtd: 1, preco: 80 } ], pago: true },
    { id: 4, cliente: "Marcos", itens: [ { produto: "Webcam", qtd: 1, preco: 150 } ], pago: true }
]

function gerarRelatório(pedido){
    let pedidosPagos = pedido.filter((s) => {
        return s.pago == true
    })

    pedidosPagos.forEach(element => {
       let soma = 0
       element.itens.forEach(item =>{
        soma += item.qtd * item.preco
       })
       element.valorTotal = soma
    });

    pedidosPagos.sort((a, b) => {
        return b.valorTotal - a.valorTotal
    })

    let totalFor = 0

    pedidosPagos.forEach(element => {
        totalFor += element.valorTotal
    })

    return {
        totalPedidosPagos: pedidosPagos.length,
        totalFor,
        pedidosProcessados: pedidosPagos
    }
}

console.log(gerarRelatório(pedidos))

// 7

const alunos = [
    { nome: "Lucas", notas: [8, 7, 9], fezProva: true },
    { nome: "Ana", notas: [4, 5, 6], fezProva: true },
    { nome: "Marcos", notas: [3, 2, 4], fezProva: true },
    { nome: "Julia", notas: [9, 8, 10], fezProva: true },
    { nome: "Pedro", notas: [7, 6, 5], fezProva: false }
]

function gerarBoletim(aluno){
    let fezprova = aluno.filter((s) => {
        return s.fezProva == true
    })

    fezprova.forEach(aluno => {
        let soma = 0

        aluno.notas.forEach(nota => {
            soma += nota
        })

        aluno.media = soma / aluno.notas.length
    })

    fezprova.forEach(element => {
        element.situacao = element.media >= 7 ? "aprovado": element.media < 5 ? "reprovado": "recuperação"
    })

    fezprova.sort((a, b) => {
        return b.media - a.media
    })

    let somaGeral = 0
    fezprova.forEach(element => somaGeral += element.media)
    let mediaGeral = somaGeral / fezprova.length

    return {
        totalAlunos: fezprova.length,
        mediaGeral: mediaGeral,
        alunosProcessados: fezprova
    }
}

console.log(gerarBoletim(alunos))


