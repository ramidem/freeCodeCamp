// Sum all odd fibonacci numbers

function sumFibs(num) {
  var prev = 0;
  var current = 1;
  var fibonacci = 0;
  while (current <= num) {
    if (current % 2 !== 0) fibonacci += current;

    current += prev;
    prev = current - prev;
  }

  return fibonacci;
}

console.log(sumFibs(4));
