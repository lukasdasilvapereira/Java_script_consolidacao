// POO

class Animal {
    constructor(name){
        this.name = name
    }

    speak(){
        console.log(`${this.name} made some noise`)
    }
}

const animal = new Animal("Lion")
console.log(animal)
animal.speak()

// 2

class Person {
    constructor(firstName, lastName, age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    getFullName(){
        console.log(`${this.firstName} ${this.lastName}`)
    }

    // PODE SER STATIC PQ NÃO LEVA NENHUM DOS ELEMENTOS
    static speak(){
        console.log("Hello world")
    }
}

const person = new Person("Lucas", "Pereira", 19)
console.log(person)

person.getFullName()
Person.speak()


// EXTENDS

class Dog extends Animal {
    constructor(name){
        super(name)
    }

    speak(){
        console.log(`${this.name} barked`)
    }
}

const dog = new Dog("Bob")

dog.speak()