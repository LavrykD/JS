// 2
let promise = new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
        setTimeout(() => resolve("Random Success"), (Math.random() + 1) * 2500);
    } else {
        setTimeout(() => reject("Random Error"), (Math.random() + 1) * 2500);
    }
});

promise.then(res => console.log(res), err => console.log(err));

// 3
function getTodos(arr) {
    const promises = arr.map(id => {
        return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(res => {
                if (!res.ok) throw new Error();
                return res.json();
            }).then(res => res, err => {
                throw new Error(`oops! ID ${id} is not found`);
            })
    });
    return Promise.all(promises)
        .then(res => console.log(res), err => console.log(err));
}

getTodos([1, 2, 3, 4, 200]);
getTodos([29, 40, 300]);
getTodos([290, 400, 300]);

// 4
async function getTodos(arr) {
    const promises = arr.map(async id => {
        let result = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        if (!result.ok) return null;
        return result.json();
    });

    const settledPromises = await Promise.allSettled(promises);

    let results = settledPromises.map(res => res.value);

    console.log(results.every(i => i === null) ? null : results);
}

getTodos([1, 2, 3, 4, 200]);
getTodos([1, 2, 201]);


// 5
async function delay(s) {
    if (s > 0) {
        await new Promise(resolve => setTimeout(() => resolve(s), 1000)).then(res => console.log(res));
        await delay(s - 1);
    }
}

delay(10);