function palindromeChecker(str) {
  let regex = /[^a-zA-Z0-9]/g;
  let strReversed = str
    .split("")
    .reverse()
    .join("")
    .toLowerCase()
    .replace(regex, "");

  let strStripped = str.toLowerCase().replace(regex, "");

  return strReversed === strStripped;
}

console.log(palindromeChecker("eye"));
console.log(palindromeChecker("race car"));
console.log(palindromeChecker("Eva, can I see bees in a cave?"));
