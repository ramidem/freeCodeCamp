function alphabeticalOrder(arr) {
  // Add your code below this line

  return arr.sort(function(a, b) {
    // return a - b;
    return a === b ? 0 : a > b ? 1 : -1;
  });

  // Add your code above this line
}
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));

//

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line
  let newArr = [].concat(arr);

  newArr.sort((a, b) => a - b);

  return newArr;
  // Add your code above this line
}

console.log(nonMutatingSort(globalArray));
console.log(globalArray);
