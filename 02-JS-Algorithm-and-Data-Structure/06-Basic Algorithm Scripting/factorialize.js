// example
// 5! = 1 * 2 * 3 * 4 * 5 = 120

function factorialize(num) {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}

console.log(factorialize(5));
