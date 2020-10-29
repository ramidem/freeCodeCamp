function sumFibs(num) {
  let curr = 1;
  let prev = 0;
  let oddFibsSum = 0;

  while (curr <= num) {
    if (curr % 2 !== 0) oddFibsSum += curr;
    curr += prev;
    prev = curr - prev;
  }

  return oddFibsSum;
}

console.log(sumFibs(4));
// console.log(sumFibs(1000)); // 1785
