const acessos = [
    { pagina: "Home", usuario: "Ana", data: "2024-11-01", tempo: 120 },
    { pagina: "Produtos", usuario: "Lucas", data: "2024-11-01", tempo: 300 },
    { pagina: "Home", usuario: "Ana", data: "2024-11-02", tempo: 180 },
    { pagina: "Contato", usuario: "Pedro", data: "2024-11-02", tempo: 90 },
    { pagina: "Produtos", usuario: "Lucas", data: "2024-11-02", tempo: 200 },
    { pagina: "Home", usuario: "Maria", data: "2024-11-02", tempo: 240 }
];


function somarTempo(t) {
    let x = t.map((s) => {
        return s.tempo
    }, 0)

    let r = x.reduce((valor, total) => {
        return valor + total
    }, 0)

    return r
}

let tempo = somarTempo(acessos)
console.log(tempo)

function tempoTotalPagina(p) {
    let objeto = {}

    p.forEach(element => {
        const pag = element.pagina
        const temp = element.tempo

        if (objeto[pag]) {
            objeto[pag] += temp
        } else {
            objeto[pag] = temp
        }
    });

    return objeto
}

let tempoTotal = tempoTotalPagina(acessos)
console.log(tempoTotal)

function paginaMaisAcessada(pag) {
    let objeto = {}
    let contador = 0
    let maisTempo = ""

    pag.forEach(element => {
        const paginas = element.pagina
        const temps = element.tempo
        if (objeto[paginas]) {
            objeto[paginas] += temps
        } else {
            objeto[paginas] = temps
        }
    })

    for(let paginas in objeto){
        if(objeto[paginas] > contador){
            contador = objeto[paginas]
            maisTempo = paginas
        }
    }

    return maisTempo
}

let paginaComMaisTempo = paginaMaisAcessada(acessos)
console.log(paginaComMaisTempo)

function diaComMaisNavegacao(d){
    let objeto = {}
    let contador = 0
    let maisTempo = ""

    d.forEach(element => {
        const dias = element.data
        const temps = element.tempo
        if (objeto[dias]) {
            objeto[dias] += temps
        } else {
            objeto[dias] = temps
        }
    })

    for(let days in objeto){
        if(objeto[days] > contador){
            contador = objeto[days]
            maisTempo = days
        }
    }

    return maisTempo
}

let diaComMaisTempo = diaComMaisNavegacao(acessos)
console.log(diaComMaisTempo)

function UsuarioComMaisNavegacao(u){
    let objeto = {}
    let contador = 0
    let maisTempo = ""

    u.forEach(element => {
        const usuario = element.usuario
        const temps = element.tempo
        if (objeto[usuario]) {
            objeto[usuario] += temps
        } else {
            objeto[usuario] = temps
        }
    })

    for(let usuarios in objeto){
        if(objeto[usuarios] > contador){
            contador = objeto[usuarios]
            maisTempo = usuarios
        }
    }

    return maisTempo
}

let usuarioComMais = UsuarioComMaisNavegacao(acessos)
console.log(usuarioComMais)