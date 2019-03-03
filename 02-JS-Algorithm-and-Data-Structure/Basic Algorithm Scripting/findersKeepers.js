// return the first element in the array that passes a truth test.
// otherwise, return undefined

function findElement(arr, func) {
  debugger;
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      num = arr[i];
      break;
    } else {
      num = undefined;
    }
  }

  if (num) {
    func(num);
    return num;
  } else {
    return undefined;
  }
}

console.log(findElement([1, 3], num => num % 2 === 0));

console.log(
  findElement([1, 3, 5, 8, 9, 10], function(num) {
    return num % 2 === 0;
  })
);
