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