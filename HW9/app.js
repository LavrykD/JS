// 2
let duplicates = (arr) => arr.filter((x, i) => arr.indexOf(x) == i);

duplicates([1, 2, 3, 4, 3, 3, 2, 5]); // [1, 2, 3, 4, 5]

// 3
function lastElement(matrix) {
    return matrix.map(e => e.at(-1));
}

lastElement([[1, 2, 3], ['a', 'b', 'c'], [1, 2, 3]]); // [3, 'c', 3]

// 4
function shuffle(arr) {
    let index = arr.length;
    while (index > 0) {
        let new_index = Math.floor(Math.random() * index);
        [arr[new_index], arr[index - 1]] = [arr[index - 1], arr[new_index]];
        index -= 1;
    }
}

shuffle([1, 2, 3, 4]);

// 5
function reverseStr(str) {
    return str.reduce((a, c) => c + a);
}

reverseStr('abcdefg'); // 'gfedcba'

// 6
function numPair(arr) {
    return arr.filter((x, i) => Math.abs(x - arr[i + 1]) == 1).length != 0;
}

numPair([1, 3, 1, 6, 1, 1, 1]); // false
numPair([1, 2, 1, 6, 1, 1, 1]); // true

// 7
function stringSort(arr) {
    let result = [];
    arr.map((e, i) => result.push([i, [...e].reduce((a, c) => a + c.charCodeAt(0), 0)]));
    return result.sort((a, b) => b[1] - a[1]).map(a => arr[a[0]]);
}

stringSort(['abcd', 'mama', 'hello', 'a', 'hf', 'z']); // ['hello', 'mama', 'abcd', 'hf', 'z', 'a']