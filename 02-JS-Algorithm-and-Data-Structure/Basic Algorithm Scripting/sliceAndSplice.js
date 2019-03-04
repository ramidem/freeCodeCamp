// using slice and splice
// copy each element of the first array into the second array, in order.
// begin inserting elements at index `n` of the second array.

function frankenSplice(arr1, arr2, n) {
  // Create a copy of the second array inside of the function.
  // This will ensure that the original array is not mutated.
  // This can be done by using the slice operation on the second array,
  // and assign it to a variable.
  let array2 = arr2.slice();

  // Loop through all of the items in the first array.
  // For each item in the first array splice it into the copied array in the
  // index given as argument.
  for (let i = 0; i < arr1.length; i++) {
    // Increment the index after performing the splice.
    array2.splice(n++, 0, arr1[i]);
  }

  return array2;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

// console.log(
//   frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)
// );

// console.log(frankenSplice([1, 2, 3], [4, 5], 1));
