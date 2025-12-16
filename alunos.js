const alunos = [
    { nome: "Ana", notas: [8, 7, 9] },
    { nome: "Lucas", notas: [6, 5, 7] },
    { nome: "Pedro", notas: [9, 9, 10] },
    { nome: "Maria", notas: [7, 8, 6] }
];


function media(a) {
    let objeto = {}

    a.forEach(element => {
        const nota = element.notas
        const alunos = element.nome
        let media = 0

        let rdc = nota.reduce((valor, total) => {
            return valor + total
        }, 0)

        media = (rdc / 3)
        let resultado = Number(media.toFixed(2))

        if (objeto[alunos]) {
            objeto[alunos] += resultado
        } else {
            objeto[alunos] = resultado
        }
    });

    return objeto
}

let medias = media(alunos)
console.log(medias)

function maiorMedia(m) {
    let objeto = {}
    let maior = ""
    let contador = 0

    m.forEach(element => {
        const nota = element.notas
        const alunos = element.nome
        let media = 0

        let rdc = nota.reduce((valor, total) => {
            return valor + total
        }, 0)

        media = (rdc / 3)
        let resultado = Number(media.toFixed(2))

        if (objeto[alunos]) {
            objeto[alunos] += resultado
        } else {
            objeto[alunos] = resultado
        }
    });

    for (let midias in objeto) {
        if (objeto[midias] > contador) {
            contador = objeto[midias]
            maior = midias
        }
    }

    return maior
}

let maiormedia = maiorMedia(alunos)
console.log(maiormedia)

function mediaGeral(m) {
    let somaTotal = 0
    let totalNotas = 0

    m.forEach(element => {
        element.notas.forEach(nota => {
            somaTotal += nota
            totalNotas++
        })
    })
    return Number((somaTotal / totalNotas).toFixed(2))
}

let geralMedia = mediaGeral(alunos)
console.log(geralMedia)

function alunosAprovados(a) {
    let alunosApro = []
    let mediaFinal = 7

    a.forEach(element => {
        const nota = element.notas
        const alunos = element.nome
        let media = 0

        let rdc = nota.reduce((valor, total) => {
            return valor + total
        }, 0)

        media = (rdc / 3)
        let resultado = Number(media.toFixed(2))

        if (resultado >= mediaFinal) {
            alunosApro.push(alunos)
        }
    });

    return alunosApro
}

let aprovadosAlunos = alunosAprovados(alunos)
console.log(aprovadosAlunos)

function notaMaisAlta(n) {
    let maiorNota = 0
    n.forEach(element => {
        element.notas.forEach(nota => {
           if(nota > maiorNota){
            maiorNota = nota
           } 
        });
    })

    return maiorNota
}

let maior = notaMaisAlta(alunos)
console.log(maior)