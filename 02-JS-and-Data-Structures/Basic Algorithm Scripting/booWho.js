function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  return typeof bool === "boolean" ? true : false;
}

console.log(booWho(null));
console.log(booWho(true));
console.log(booWho([1, 2, 3]));
console.log(booWho(null));
console.log(booWho(null));
