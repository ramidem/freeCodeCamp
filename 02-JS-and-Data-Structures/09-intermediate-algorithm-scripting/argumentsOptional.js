function addTogether() {
  // i do not understand this for now.
  let args = Array.from(arguments);

  return args.some(n => typeof n !== "number")
    ? undefined
    : args.length > 1
    ? args.reduce((acc, n) => acc + n, 0)
    : n => (typeof n === "number" ? n + args[0] : undefined);
}

console.log(addTogether(2, 3));
// console.log(addTogether(2));
// console.log(addTogether(2, 3, 3));
console.log(addTogether("f", 3, 3));
