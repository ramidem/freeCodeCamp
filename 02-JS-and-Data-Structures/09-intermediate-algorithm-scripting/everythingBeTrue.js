function truthCheck(collection, pre) {
  // Is everyone being true?
  return collection.every(item => {
    return !!item[pre];
  });
}

// console.log(
//   truthCheck(
//     [
//       { user: "Tinky-Winky", sex: "male" },
//       { user: "Dipsy", sex: "male" },
//       { user: "Laa-Laa", sex: "female" },
//       { user: "Po", sex: "female" }
//     ],
//     "sex"
//   )
// ); // true

console.log(
  truthCheck(
    [
      { user: "Tinky-Winky", sex: "male", age: 0 },
      { user: "Dipsy", sex: "male", age: 3 },
      { user: "Laa-Laa", sex: "female", age: 5 },
      { user: "Po", sex: "female", age: 4 }
    ],
    "age"
  )
); // false
