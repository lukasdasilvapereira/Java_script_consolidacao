// Encontrar o segundo maior número

// Crie uma função que retorne o segundo maior valor de um array.

let nums = [10, 5, 8, 20, 3, 9];

function retornaSegundoMaior() {
    nums.sort((a, b) => b - a)
    let segundo = nums[1]
    console.log(segundo)
}

retornaSegundoMaior()

// Temporizador

function temporizador() {
    console.log("Olá, essa é a mensagem")
}


setInterval(() => {
    temporizador()
}, 5000)


// VALIDADOR DE SENHA

let senha = "Flalucas123"
let num = 1234567890

if(senha.length < 8 ) {
    console.log("Sua senha é menor que 8 caracteres")
}

else if(!/\d/.test(senha)) {
    console.log("Sua senha precisa de um número")
}

else if(!/[A-Z]/.test(senha)) {
    console.log("Sua senha precisa de uma letra maíscula ")
}
else {
    console.log(`Sua senha é ${senha}`)
}