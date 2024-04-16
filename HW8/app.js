// 1
function getUniqueElements(arr) {
    let result = [];
    for (let i of arr) {
        if (!result.includes(i)) {
            result.push(i);
        }
    }
    return result;
}

getUniqueElements([2, 7, 7, 5, 4, 2, 7]); // [2, 7, 5, 4]

// 2
function sum(arr) {
    /*
    Without 'reduce' method
    let result = 0;
    for (let i of arr) {
        result += i;
    }
    return result;
    */
    return arr.reduce((a, b) => a + b);
}

sum([1, 1, 4, 3]); // 9

// 3
function partialReverse(arr) {
    let result = [];
    for (let i in arr) {
        if (i == 0 || i == arr.length - 1) result.push(arr[i]);
        else result.push(arr.at(-1 - i));
    }
    return result;
}

partialReverse([1, 2, 3, 4, 5, 6]); // [1, 5, 4, 3, 2, 6]


// 4
function glueArrays(arr1, arr2) {
    return arr1.at(-1) === arr2[0] ? arr1.concat(arr2.slice(1)) : null;
}

glueArrays([1,2,3,4], [4,5,8,6]); // [1, 2, 3, 4, 5, 8, 6]
glueArrays([1,2,3,3], [3,3,8,6]); // [1, 2, 3, 3, 3, 8, 6]
glueArrays([1,2,3,4], [5,2,8,6]); // null

// 5
function stringReverse(s) {
    let result = '';
    let r = [...s];
    while(s.length > result.length) {
        result += r.pop();
    }
    return result;
}

stringReverse('abcdefg');

// 6
function noDuplicates(arr) {
    for (let i of arr) {
        if (arr.indexOf(i) != arr.lastIndexOf(i)) return false;
    }
    return true;
}

noDuplicates([1, 2, 3, 4, 5]); // true
noDuplicates([1, 5, 2, 3, 4, 5]); // false


// 7
function removeNegative(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) arr.splice(i, 1);
    }
    return arr;
}

removeNegative([-2,4,3,-10,0,3, -22, 4, 2, -2]); // [4, 3, 0, 3, 4, 2]