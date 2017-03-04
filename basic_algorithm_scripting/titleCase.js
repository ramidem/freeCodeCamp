// for Loop Method
// function titleCase(str) {
//   var strLower = str.toLowerCase();
//   var strSplit = strLower.split(' ');
//
//   for (var i = 0; i < strSplit.length; i++) {
//     strSplit[i] = strSplit[i].charAt(0).toUpperCase() + strSplit[i].slice(1);
//   }
//   return strSplit.join(' ');
// }

// .map() Method
// function titleCase(str) {
//   return str.toLowerCase().split(' ').map(function(word) {
//     return (word.charAt(0).toUpperCase() + word.slice(1));
//   }).join(' ');
// }

// .map() and .replace() Method
function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}

titleCase("SHORT AND STOUT");
