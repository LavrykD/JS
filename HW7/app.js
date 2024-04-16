// 2
function calculate(a, b, op, res) {
  return res ? res(op(a, b)) : op(a, b);
}

calculate(2, 5, (a, b) => a + b, r => console.log(`Result: ${r}`)); // undefined
calculate(3, 6, (a, b) => a / b, r => r.toString()); // 0.5


// 3
const pow = (x, n) => n > 0 && typeof x === 'number' ? x ** n : undefined;

pow(-2, 3); // -8


// 5
function sum(n1) {
  return (n2) => n1 + n2;
}

sum(2)(3); // 5