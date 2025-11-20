// FOR OF PARA ARRAYS

const nomes = ["Lucas", "José", "Paulo", "Paula"]

//for(let i = 0; i < nomes.length; i++) {
 //   console.log(nomes[i])
//}

for (const nome of nomes) {
    console.log(nome)
}

// FOR IN PARA OBJETOS

const person = {
    nome: "Lucas",
    idade: 19,
    job: "I.T"
}

for(const prop in person) {
    console.log(`${prop} - ${person[prop]}`)
}
