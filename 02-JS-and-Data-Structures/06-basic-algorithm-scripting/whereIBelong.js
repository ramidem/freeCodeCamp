function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  let newArr = arr;

  if (newArr.indexOf(num) === -1) newArr.push(num);
  newArr.sort((a, b) => a - b);

  return newArr.indexOf(num);
}

// console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([2, 5, 10], 15));
// console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
// console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
