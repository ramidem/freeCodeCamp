// check if string ends with the given target string.
// confirmEnding("Bastian", "n") // true

function confirmEnding(str, target) {
  if (str.slice(-target.length) == target) {
    return true;
  } else {
    return false;
  }
}

console.log(confirmEnding("Congratulation", "on"));

console.log(
  confirmEnding(
    "Walking on water and developing software from a specification are easy if both are frozen",
    "specification"
  )
);
