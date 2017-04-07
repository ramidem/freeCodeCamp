function reverseString(str) {

  // All them methods
  var split = str.split('');
  var reverse = split.reverse();
  var join = reverse.join('');

  // All in one
  // return str.split('').reverse().join('');

  // For Loop
  var join = "";
  for (var i = str.length - 1; i >= 0; i--) {
    join += str[i];
  }

  return join;
}

console.log(reverseString("racecar"));
