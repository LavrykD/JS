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
function checkDogBreed(dogObject, Breed) {
    
}

