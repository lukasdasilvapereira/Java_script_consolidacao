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




