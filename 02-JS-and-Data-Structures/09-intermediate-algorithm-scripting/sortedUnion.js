function uniteUnique(arr) {
  let args = Array.prototype.slice.call(arguments);
  let united = [];

  for (let i = 0; i < args.length; i++) {
    for (let j = 0; j < args[i].length; j++) {
      if (united.indexOf(args[i][j]) == -1) {
        united.push(args[i][j]);
      }
    }
  }

  return united;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
