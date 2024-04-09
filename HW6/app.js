// 1
function newYearTree(n) {
    for (let i = 0; i < n; i += 1) {
      console.log(' '.repeat(n - i) + '*'.repeat(2 * i + 1));
    }
  }
  
  newYearTree(7);
  
  // 2
  for (let i = 2; i <= 30; i += 2) {
    if (i == 14 || i == 18) continue;
    if (!(i % 2)) console.log(i);
  }
  
  // 3
  let num = 2;
  while (num <= 30) {
    if (num !== 14 && num !== 18) console.log(num);
    num += 2;
  }
  
  // 4
  while (true) {
    let userInput = prompt('Enter the number higher than 100: ');
    if (Number(userInput) > 100 || userInput === '') {
      break;
    }

    if (Number(userInput) <= 100) {
      alert('Please, enter the valid number!');
    } else if (isNaN(userInput)) {
      alert('Please, enter the valid number not a string!');
    }
  }

  // 5
  function primeNumber(n) {
    for (let i = 2; i <= n; i += 1) {
      let count = 0;
      for (let j = 1; j <= i; j += 1) {
        if (!(i % j)) count += 1;
      }
      if (count == 2) console.log(i);
    }
  }

  primeNumber(10);
  