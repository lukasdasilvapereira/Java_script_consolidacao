const person = {
    name: "Lucas",
    age: 19,
    address: {
        city: "Nova iguaçu",
        state: "Rio de janeiro"
    },
}

person.age = 20
person.hair = "Black"

console.log(person)

console.log(person.name)

console.log(`Bom dia meu nome é ${person.name}, Tenho ${person.age} anos e eu vivo em ${person.address.city}`)