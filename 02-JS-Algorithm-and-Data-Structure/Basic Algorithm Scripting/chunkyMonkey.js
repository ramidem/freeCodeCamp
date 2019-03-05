// splits an array (first argument) into groups of `size` (second argument) and
// returns them as two-dimensional array.

function chunkArrayInGroups(arr, size) {
  let newArray = [];
  // Break it up.
  for (let i = 0; i < arr.length; i += size) {
    console.log(i);

    newArray.push(arr.slice(i, i + size));
  }

  // newArray.push(arr.slice(0, 2));
  // newArray.push(arr.slice(2, 4));

  console.log([arr]);

  return newArray;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
