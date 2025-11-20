let dados = [0, "Lucas", "", 42, null, "JS", undefined, NaN, true];

function cambio() {
    let novoArray = dados.filter(Boolean)
    console.log(novoArray)
}

cambio()