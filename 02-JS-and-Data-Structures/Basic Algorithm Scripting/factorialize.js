function factorialize(num) {
  return num == 0 || num == 1 ? (num = 1) : (num *= factorialize(num - 1));
}

console.log(factorialize(5));
console.log(factorialize(10));
console.log(factorialize(20));
console.log(factorialize(0));
