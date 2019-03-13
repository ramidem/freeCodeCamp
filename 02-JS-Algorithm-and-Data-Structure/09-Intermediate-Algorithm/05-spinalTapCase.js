// Convert a string to spinal case.
// Spinal case is all-lowercase-words-joined-by-dashes.

// https://stackoverflow.com/questions/36658624/how-do-i-convert-a-string-to-spinal-case-in-javasscript

function spinalCase(str) {
  return str
    .replace(/(?!^)([A-Z])/g, " $1")
    .replace(/[_\s]+(?=[a-zA-Z])/g, "-")
    .toLowerCase();
}

console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
