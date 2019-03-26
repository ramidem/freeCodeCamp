// Sum All Primes

function sumPrimes(num) {
  let sieves = [];
  let primes = [];

  for (let i = 2; i <= num; i++) {
    if (!sieves[i]) {
      primes.push(i);

      for (let j = i << 1; j <= num; j += i) {
        sieves[j] = true;
      }
    }
  }
  return primes.reduce((a, b) => {
    return a + b;
  });
}

// console.log(sumPrimes(10));
console.log(sumPrimes(10));
