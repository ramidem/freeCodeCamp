// Return the lowest index at which a value (second argument) should be inserted
// into an array (first argument) once it has been sorted.
// The returned value should be a number.

function getIndexToIns(arr, num) {
  let newArray = arr.slice();
  newArray.push(num);

  // sort the array from lower to bigger.
  // JS Array Sort
  newArray.sort(function(a, b) {
    return a - b;
  });

  // then check for the first number that is bigger and return the index
  // if there is no index, return 0
  return newArray === [] ? 0 : newArray.indexOf(num);
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); // should return 3.
console.log(getIndexToIns([], 1)); // should return a number.
