function rot13(str) {
  // LBH QVQ VG!
  let letters = str.toUpperCase();

  // console.log(String.fromCharCode("".toUpperCase().charCodeAt() + 13));
  console.log("M".toUpperCase().charCodeAt());
  let match = [];

  for (let i = 0; i < letters.length; i++) {
    if (letters[i].match(/[A-Z]/)) {
      if (letters[i].charCodeAt() < 78) {
        match.push(String.fromCharCode(letters[i].charCodeAt() + 13));
      } else {
        match.push(String.fromCharCode(letters[i].charCodeAt() - 13));
      }
    } else {
      match.push(letters[i]);
    }
  }
  return match.join("");
}

console.log(rot13("SERR PBQR PNZC"));
