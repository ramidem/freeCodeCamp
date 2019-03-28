function smallestCommons(arr) {
  arr.sort(function(a, b) {
    return a - b;
  });

  let range = [];

  let lcd = 0;

  for (let i = arr[0]; i <= arr[1]; i++) {
    range.push(i);
  }
  console.log(range);

  for (let i = 1; i <= range.length; i++) {
    console.log(i);

    for (let n = 2; n <= range.length; n++) {
      console.log(range.length);

      console.log(n);

      lcd = range[0] * i * range[1];

      if (lcd % range[n] !== 0) {
        break;
      }
    }
  }

  return lcd;
}

console.log(smallestCommons([1, 5]));
// console.log(smallestCommons([2, 10]));
