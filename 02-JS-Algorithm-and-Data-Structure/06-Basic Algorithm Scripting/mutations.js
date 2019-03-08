// return true if the string in the first element of the array contains all of
// the letter of the string in the second element of the array

function mutation(arr) {
  let arr1 = arr[0].toLowerCase().split("");
  let arr2 = arr[1].toLowerCase().split("");

  let stopper = true;

  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      stopper = false;
      break;
    }
  }

  return stopper;
}

console.log(mutation(["hello", "hey"])); // should return false.
console.log(mutation(["hello", "Hello"])); // should return true.
