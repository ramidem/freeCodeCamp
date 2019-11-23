function translatePigLatin(str) {
  let consonantsRegex = /^[^aeiou]+/;
  let consonants = str.match(consonantsRegex);

  return consonants !== null
    ? str
        .replace(consonantsRegex, "")
        .concat(consonants)
        .concat("ay")
    : str.concat("way");
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("globe"));
console.log(translatePigLatin("apple"));
console.log(translatePigLatin("aaron"));
console.log(translatePigLatin("sphinx"));
