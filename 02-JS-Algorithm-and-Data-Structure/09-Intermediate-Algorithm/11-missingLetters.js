// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  let missingLetter = "" || undefined;

  const firstLetter = str.charCodeAt(0);
  const lastLetter = str.charCodeAt(str.length - 1);

  for (let i = firstLetter; i <= lastLetter; i++) {
    let missingChar = String.fromCharCode(i);

    str.indexOf(missingChar) === -1 ? (missingLetter = missingChar) : false;
  }

  return missingLetter;
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
