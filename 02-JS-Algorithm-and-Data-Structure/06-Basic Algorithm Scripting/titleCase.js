// return the provided string with the first letter of each
// word capitalized

function titleCase(str) {
  let splitStr = str.split(" ");
  let newStr = [];

  for (let i = 0; i < splitStr.length; i++) {
    var firstLetter = splitStr[i].slice(0, 1).toUpperCase();
    var restOfTheWord = splitStr[i].slice(1, splitStr[i].length).toLowerCase();

    newStr.push(firstLetter + restOfTheWord);
  }

  return newStr.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
