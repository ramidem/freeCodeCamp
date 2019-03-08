// remove falsy values from an array

function bouncer(arr) {
  let truthy = [];

  for (let i = 0; i < arr.length; i++) {
    Boolean(arr[i]) === true ? truthy.push(arr[i]) : false;
  }

  return truthy;
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer(["a", "b", "c"]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer([1, null, NaN, 2, undefined]));
