function truthCheck(collection, pre) {
  let truths = 0;
  for (let x = 0; x < collection.length; x++) {
    if (collection[x].hasOwnProperty(pre) && Boolean(collection[x][pre])) {
      truths += 1;
    }
  }

  return truths === collection.length;
}

console.log(
  truthCheck(
    [
      { user: "Tinky-Winky", sex: "male" },
      { user: "Dipsy", sex: "male" },
      { user: "Laa-Laa", sex: "female" },
      { user: "Po", sex: false }
    ],
    "sex"
  )
);
