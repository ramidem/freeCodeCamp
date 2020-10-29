function destroyer() {
  // Remove all the values
  let destroyed = [];
  let firstArr = Array.prototype.slice.call(arguments);
  let destroyer = firstArr.slice(1);

  for (let i = 0; i < firstArr[0].length; i++) {
    if (destroyer.includes(firstArr[0][i]) == false) {
      destroyed.push(firstArr[0][i]);
    }
  }

  return destroyed;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
