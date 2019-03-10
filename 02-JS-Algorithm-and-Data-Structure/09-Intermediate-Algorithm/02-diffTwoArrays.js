// Diff Two Arrays
// return the symmetric difference of the two arrays

function diffArray(arr1, arr2) {
  var newArr = [];

  function onlyInFirst(first, second) {
    first.filter(item =>
      second.indexOf(item) === -1 ? newArr.push(item) : false
    );
  }

  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);

  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));

console.log(
  diffArray(
    ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  )
);

console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]));

console.log(
  diffArray(
    ["andesite", "grass", "dirt", "dead shrub"],
    ["andesite", "grass", "dirt", "dead shrub"]
  )
);
