// Ordenar palavras por tamanho

//Receba um array de strings e retorne o mesmo array ordenado da maior para a menor palavra.

let arr = ["sol", "computador", "webs"]

arr.sort((a, b) => {
    return b.length - a.length
})

console.log(arr)


//3. Converter valores para moeda

//Crie uma função que recebe um array de números e retorna um novo array com o formato:

let moedas = [5, 10, 25, 50, 100]

function cambio() {
   moedas.map((x) => {
        let n = [`R$ ${x}`]
        console.log(n)
    })

}

cambio()