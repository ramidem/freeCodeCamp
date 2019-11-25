function fearNotLetter(str) {
  let letters = str.split("");
  let rangeFrom = letters[0].charCodeAt();
  let rangeTo = letters[letters.length - 1].charCodeAt();

  for (let i = rangeFrom; i <= rangeTo; i++) {
    if (str.indexOf(String.fromCharCode(i)) === -1) {
      return String.fromCharCode(i);
    }
  }

  return undefined;
}

console.log(fearNotLetter("abce"));
