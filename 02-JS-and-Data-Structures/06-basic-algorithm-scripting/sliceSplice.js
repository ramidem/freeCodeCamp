function frankenSplice(arr1, arr2, n) {
  // copy each element from the first array into the
  // second array starting at the index n

  let secondArr = arr2;

  for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
    secondArr.splice(n, 0, arr1[i]);
    n++;
  }

  return secondArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
console.log(frankenSplice([1, 2], ["a", "b"], 1));
