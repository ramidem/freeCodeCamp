// Pig Latin takes consonant (or consonant cluster) of an English word,
// moves it to the end of the word and suffixes an "ay".
// If a word begins with a vowel you just add "way" to the end.

function translatePigLatin(str) {
  let pigLatin = "";
  const vowels = /[aeiou]/gi;

  if (str[0].match(vowels)) {
    pigLatin = `${str}way`;
  } else if (str.match(vowels) === null) {
    pigLatin = `${str}ay`;
  } else {
    let vowelIndice = str.indexOf(str.match(vowels)[0]);
    pigLatin = `${str.substr(vowelIndice) + str.substr(0, vowelIndice)}ay`;
  }
  return pigLatin;
}

console.log(translatePigLatin("california")); // should return "aliforniacay"
console.log(translatePigLatin("paragraphs")); // should return "aragraphspay".
console.log(translatePigLatin("glove")); // should return "oveglay".
console.log(translatePigLatin("algorithm")); // should return "algorithmway".
console.log(translatePigLatin("eight")); // should return "eightway".
