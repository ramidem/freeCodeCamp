function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  return str
    .split("")
    .slice(`-${target.split("").length}`)
    .join("") == target
    ? true
    : false;
}

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Open sesame", "same"));
console.log(confirmEnding("Open sesame", "game"));
