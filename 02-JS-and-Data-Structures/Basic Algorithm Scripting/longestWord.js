function findLongestWordLength(str) {
  let longest = 0;

  let arrSplit = str.split(" ");
  for (let i = 0; i < arrSplit.length; i++) {
    if (longest < arrSplit[i].length) {
      longest = arrSplit[i].length;
    }
  }

  return longest;
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
console.log(findLongestWordLength("May the force be with you"));
console.log(findLongestWordLength("Google do a barrel roll"));
