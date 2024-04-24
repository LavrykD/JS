//1
let ivan = { name: "Іван", age: 25 };
let petro = { name: "Петро", age: 30 };
let mariya = { name: "Марія", age: 28 };
let array = [ petro, ivan, mariya ];

function sortByAge(arr) {
    return array.toSorted((a, b) => a.age - b.age);
}

sortByAge(array);

//2
let users = [
    {id: 'іван', name: "Іван Іванко", age: 20},
    {id: 'ганна', name: "Ганна Іванко", age: 24},
    {id: 'петро', name: "Петро Петренко", age: 31},
];

function groupById(arr) {
    // return arr.reduce((a, c) => a[arr[i].id] = , {})
}

groupById(users);

//3
const people = [
    { name: 'Oleksii', city: 'Kyiv' },
    { name: 'Simona', city: 'Lviv' },
    { name: 'Nastia', city: 'Kyiv' },
];

let result = people.reduce((a, c) => {
    if (a[c.city] === undefined) {
        a[c.city] = [c.name];    
    } else {
        a[c.city].push(c.name);
    }
    return a;
}, {});

console.log(result); // {'Kyiv': ['Oleksii', 'Nastia'], 'Lviv': ['Simona']}

//4
let obj = { banana: 1, orange: 2, meat: 4 };
const doublePrices = (obj) => {
    for (let k in obj) {
        obj[k] *= 2;
    }
    return obj;
};

console.log(doublePrices(obj));