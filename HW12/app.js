// 1
class Animal {
    constructor(legs) {
        this.legs = legs;
    }

    happySound() {
        console.log(`This animal has ${this.legs} legs.`);
    }
}

class Dog extends Animal {
    constructor(legs, name) {
        super(legs);
        this.name = name;
    }

    callByName() {
        console.log(`Come to me, ${this.name}!`);
    }
}

class Bulldog extends Dog {
    constructor(legs, name, years) {
        super(legs, name);
        this.years = years;
    }

    callYears() {
        console.log(`My bulldog ${this.name} is ${this.years} years old now.`);
    }
}

const myDog = new Bulldog(4, "Charlie", 3);

myDog.happySound();
myDog.callByName();
myDog.callYears();

// 2
class User {
    #firstName;
    #lastName;

    constructor(firstName, lastName) {
        this.#firstName = firstName;
        this.#lastName = lastName;
    }

    get fullName() {
        return `${this.#firstName} ${this.#lastName}`;
    }

    set fullName(fullName) {
        let [firstName, lastName] = fullName.split(' ');
        this.#firstName = firstName;
        this.#lastName = lastName;
    }
}

const user = new User("Dmytro", "Lavryk");

console.log(user.fullName);

user.firstName = "Andy";
user.lastName = "Groomly";
console.log(user.fullName);

user.fullName = "Andy Groomly";
console.log(user.fullName);

// 3
class Dogs {
    constructor(breed) {
        this.breed = breed;
        this.offspring = [];
    }

    offSpring(dog) {
        this.offspring.push(dog);
    }
}

function checkDogBreed(dogObject, Breed) {
    if (dogObject.breed === Breed) return true;

    for (let breed of dogObject.offspring) {
        if (checkDogBreed(breed, Breed)) return true;
    }

    return false;
}

let maltipu = new Dogs("Maltipu");
let maltese_bologna = new Dogs("Maltese bologna");
let poodle = new Dogs("Poodle");
let otherDog = new Dogs("Other Dog");

maltipu.offSpring(maltese_bologna);
maltipu.offSpring(poodle);
poodle.offSpring(otherDog);

console.log(maltipu.offspring);
console.log(poodle.offspring);
console.log(checkDogBreed(maltipu, "Maltese bologna"));
console.log(checkDogBreed(maltipu, "Poodle"));
console.log(checkDogBreed(maltipu, "Other Dog"));


