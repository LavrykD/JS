//1
let ivan = { name: "Іван", age: 25 };
let petro = { name: "Петро", age: 30 };
let mariya = { name: "Марія", age: 28 };
let oksana = { name: "Оксана", age: 12 };
let array = [ petro, ivan, mariya, oksana ];

function sortByAge(arr) {
    return array.toSorted((a, b) => a.age - b.age);
}

console.log(sortByAge(array));

//2
let users = [
    {id: 'іван', name: "Іван Іванко", age: 20},
    {id: 'ганна', name: "Ганна Іванко", age: 24},
    {id: 'петро', name: "Петро Петренко", age: 31},
];

function groupById(arr) {
    return arr.reduce((acc, cur) => ({...acc, [cur.id]: cur}), {})
}

console.log(groupById(users));

//3
let people = [
    { name: 'Oleksii', city: 'Kyiv' },
    { name: 'Simona', city: 'Lviv' },
    { name: 'Nastia', city: 'Kyiv' },
];

function groupByCity(arr) {
    return arr.reduce((a, c) => {
        if (a[c.city] === undefined) {
            a[c.city] = [c.name];    
        } else {
            a[c.city].push(c.name);
        }
        return a;
    }, {});
}

console.log(groupByCity(people)); // {'Kyiv': ['Oleksii', 'Nastia'], 'Lviv': ['Simona']}

//4
let obj = { banana: 1, orange: 2, meat: 4 };
const doublePrices = (obj) => {
    let result = {...obj};
    for (let k in result) {
        result[k] *= 2;
    }
    return result;
};

console.log(doublePrices(obj));

//5
let salary = { "Іван": 100, "Петро": 300, "Марія": 250 };
const getTopSalary = (obj) => Object.keys(obj).find(k => obj[k] === Math.max(...Object.values(obj)));

console.log(getTopSalary(salary)); // Петро

//6
let arr = [2, 2, 2, 2, 3, 3, 7, 4, 4];
const countDuplicates = (ar) => ar.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
}, {});

console.log(countDuplicates(arr));

//9
function extend(args) {
    let result = {};
    args.forEach(x => {
        for (let k in x) {
            if (result[k] === undefined) result[k] = x[k];
        }
    });
    return result;
}

console.log(extend([{ a: 1, b: 2 }, { c: 3 }]));
console.log(extend([{ a: 1, b: 2 }, { c: 3 }, { d: 4 }]));
console.log(extend([{ a: 1, b: 2 }, null, { a: 3, c: 3 }]));
console.log(extend([{ a: 1, b: 2 }, [1, 2, 3, 'a'], { a: 3, c: 3 }]));

//10
function makeTree(h) {
    let result = [];
    for (let i = 0; i < h; i += 1) {
        result.push(' '.repeat(h - i - 1) + '*'.repeat(2 * i + 1));
    }
    return {tree: result, showTree: function() { result.forEach(x => console.log(x)) }};
};

console.log(makeTree(3).tree);
console.log(makeTree(5).showTree());