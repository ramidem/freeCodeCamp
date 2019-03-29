function dropElements(arr, func) {
  let count = arr.length;
  for (let i = 0; i < count; i++) {
    console.log(arr.length);
    console.log(i);
    console.log(func(i));
    console.log(!func(arr[i]));
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}

console.log(
  dropElements([1, 2, 3, 9, 2], function(n) {
    return n > 2;
  })
);

console.log(
  dropElements([1, 2, 3, 4], function(n) {
    return n > 5;
  })
);
