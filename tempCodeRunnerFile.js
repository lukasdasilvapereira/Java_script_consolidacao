function maisCaro(m){
    let objeto = {}
    let contador = 0

    m.forEach(element => {
        element.valor.forEach(valores => {
            if(objeto[valores] > contador){
                objeto[valores] += contador
            }
        })
    });
    return objeto
}

let caroMais = maisCaro(pedidos)
console.log(caroMais)
