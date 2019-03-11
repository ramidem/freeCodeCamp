// Seek and Destroy

// remove all elements from the initial array that are of the same value as
// the arguments.

function destroyer(arr, ...args) {
  var invincible = [];

  for (let i = 0; i < arr.length; i++) {
    if (args.indexOf(arr[i]) === -1) {
      invincible.push(arr[i]);
    }
  }

  return invincible;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
