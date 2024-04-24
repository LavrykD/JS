//3
const people = [
    { name: 'Oleksii', city: 'Kyiv' },
    { name: 'Simona', city: 'Lviv' },
    { name: 'Nastia', city: 'Kyiv' },
];

let result = people.reduce((a, c) => a[c['city']] === undefined ? a[c['city']] = [c['name']] : a[c['city']].push(c['name']), {});
console.log(result); // ['Nastia']


result = {};
for (let i of people) {
    if (result[i['city']] === undefined) result[i['city']] = [i['name']];
    else result[i['city']].push(i['name'])
}
console.log(result); // {'Kyiv': ['Oleksii', 'Nastia'], 'Lviv': ['Simona']}