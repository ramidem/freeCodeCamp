// flatten a nested array and account for varying levels of nesting
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat

function steamrollArray(arr) {
  return arr.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(steamrollArray(val)) : acc.concat(val),
    []
  );
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
