/*
return true if palindrome. otherwise, false.
remove all non-alphanumeric characters
turn everything lowercase

*/
function palindrome(str) {
  // Good luck!
  var regex = /[\W_]/g;
  var lowercase = str.toLowerCase().replace(regex, '');
  var reverse = lowercase.split('').reverse().join('');

  return reverse === lowercase;
}

// function palindrome(str) {
// 	var regex = /[\W_]/g;
// 	lowercase = str.toLowerCase().replace(regex, '');

// 	var strLength = lowercase.length;

// 	for (var i = 0; i < strLength/2; i++) {
// 		if (str[1] !== str[strLength - 1 - i]) {
// 			return true;
// 		}
// 	}
// 	return false;
// }



palindrome("not a palindrome");
