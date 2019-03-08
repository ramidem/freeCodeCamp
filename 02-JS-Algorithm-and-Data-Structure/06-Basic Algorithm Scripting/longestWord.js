// return the length (number) of the longest word provided

function findLongestWordLength(str) {
  let strArr = str.split(" ");
  let longest = 0;
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length > longest) {
      longest = strArr[i].length;
    }
  }

  return longest;
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
console.log(findLongestWordLength("May the force be with you"));
console.log(findLongestWordLength("Google do a barrel roll"));
console.log(
  findLongestWordLength(
    "What is the average airspeed velocity of an unladen swallow"
  )
);
console.log(
  findLongestWordLength(
    "What if we try a super-long word such as otorhinolaryngology"
  )
);
