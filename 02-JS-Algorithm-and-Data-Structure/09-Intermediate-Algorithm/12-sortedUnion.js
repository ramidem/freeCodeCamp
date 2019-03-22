// takes two or more parameters and returns a new array of unique values
// in the order of the original provided arrays

function uniteUnique() {
  const unique = [];

  for (let i = 0; i < arguments.length; i++) {
    for (let j = 0; j < arguments[i].length; j++) {
      if (unique.indexOf(arguments[i][j]) < 0) unique.push(arguments[i][j]);
    }
  }

  return unique;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
