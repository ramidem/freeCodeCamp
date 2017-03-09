
function chunkArrayInGroups(arr, size) {
  var newArr = [];
  var count = 0;

  while (count < arr.length) {
    newArr.push(arr.slice(count, count+size));
    count += size;
  }
  return newArr;
}

chunkArrayInGroups([9,8,7,6,5,4,3,2,1], 3);
