function dropElements(arr, func) {
  // Drop them elements.
  let length = arr.length;

  for (let i = 0; i < length; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}

console.log(
  dropElements([1, 2, 3], function(n) {
    return n === 3;
  })
);
