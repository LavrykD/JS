// 1
const animal = {
    brain: 1,
    happySound() {
        console.log("*sound of happinnes*");
    }
};

const dog = Object.create(animal);
dog.barkSound = "woof-woof";
dog.makeBark = function() {
    console.log(this.barkSound);
};

const bullbog = Object.create(dog);
bullbog.gruntSound = "oink-oink";
bullbog.makeGrunt = function() {
    console.log(this.gruntSound);
};

bullbog.happySound();
bullbog.makeBark();
bullbog.makeGrunt();

// 2
function Train(dog) {
    dog.character = "Active";
    dog.commands = {
        sit() {
            console.log(`${dog.name} know command "sit"`);
        },
        dance() {
            console.log(`${dog.name} know command "dance"`);
        }
    }
    return dog;
}

const myDogJack = {
    name: 'Jack',
    character: 'Uncontrolled',
}

Train(myDogJack);
console.log(myDogJack.character);
myDogJack.commands.sit();
myDogJack.commands.dance()

// 3
function makePuppy(mother, father) {
    const { name: motherName } = mother;
    const { name: fatherName } = father;
    const puppyName = motherName + fatherName.toLowerCase();

    return {...mother, ...father, name: puppyName};
}

const motherDog = {
    name: "Iris",
    color: "Brown"
  };
  
  const fatherDog = {
    name: "Jack",
    color: "Black"
  };
  
  const puppy = makePuppy(motherDog, fatherDog);
  console.log(puppy);