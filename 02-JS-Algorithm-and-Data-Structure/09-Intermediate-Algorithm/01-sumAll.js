// Sum All Numbers in a Range
// Return the sum of those two numbers
// plus the sum of all the numbers between them.

function sumAll(arr) {
  var numbers = [];

  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    numbers.push(i);
  }
  // return Math.min(...arr);
  return numbers.reduce(function(a, b) {
    return a + b;
  });
}

console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));
console.log(sumAll([5, 10]));
console.log(sumAll([10, 5]));
console.log(sumAll([1, 100]));
