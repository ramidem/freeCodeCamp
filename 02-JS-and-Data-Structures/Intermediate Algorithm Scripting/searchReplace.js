function myReplace(str, before, after) {
  return str.replace(before, function() {
    return before.charAt(0) === before.charAt(0).toUpperCase()
      ? after.charAt(0).toUpperCase() + after.slice(1)
      : after;
  });
}

console.log(
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
);
console.log(
  myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped")
);
console.log(
  "A quick brown fox jumped over the lazy dog".replace("jumped", "leaped")
);
