// lowest to highest order
// sum of two nums plus the nums between

function sumAll(arr) {
  let range = [];
  let sorted = arr.sort((a, b) => a - b);

  for (let i = sorted[0]; i <= sorted[1]; i++) {
    range.push(i);
  }

  return range.reduce((acc, current) => acc + current);
}

console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));
console.log(sumAll([5, 10]));
