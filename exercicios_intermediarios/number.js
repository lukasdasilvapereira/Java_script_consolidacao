// Encontrar o segundo maior número

// Crie uma função que retorne o segundo maior valor de um array.

let nums = [10, 5, 8, 20, 3, 9];

function retornaSegundoMaior() {
    nums.sort((a, b) => b - a)
    let segundo = nums[1]
    console.log(segundo)
}

retornaSegundoMaior()
