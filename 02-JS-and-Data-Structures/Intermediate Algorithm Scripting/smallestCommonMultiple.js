function smallestCommons(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  let lcm = max;

  for (let i = max - 1; i >= min; i--) {
    if (lcm % i) {
      lcm += max;
      i = max;
    }
  }

  return lcm

}

console.log(smallestCommons([1, 5]));
// console.log(smallestCommons([15, 20]));
