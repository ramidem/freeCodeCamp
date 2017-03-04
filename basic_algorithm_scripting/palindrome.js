/*
return true if palindrome. otherwise, false.
remove all non-alphanumeric characters
turn everything lowercase

*/

function palindrome(str) {
	var regex = /[\W_]/g;
	var lowerReplace = str.toLowerCase().replace(regex, '');
	var reverse = lowerReplace.split('').reverse().join('');

	return reverse === lowerReplace;
}

// function palindrome(str) {
//   var regex = /[^A-Za-z0-9]/g;
//   var lowerReplace = str.toLowerCase().replace(regex, '');
//
//   var strLength = lowerReplace.length;
//
//   for(var i = 0; i < strLength/2; i++ ) {
//     if (lowerReplace[i] !== lowerReplace[strLength - 1 - i]) {
//       return false;
//     }
//   }
//
//   return true;
// }

palindrome("not a palindrome");
