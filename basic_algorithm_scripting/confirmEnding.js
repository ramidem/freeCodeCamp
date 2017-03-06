// First Attempt
function confirmEnding(str, target) {
  var ending = str.toLowerCase().slice(-1);
  if (ending === target) { // this only validates one letter
		return true;
	} else {
		return false;
	}
}

// This works! I made it myself

function confirmEnding(str, target) {
//   var ending = str.toLowerCase().split('');
//   var target = target.toLowerCase().split('');

	if (str.endsWith(target)) {
		return true;
	} else {
		return false;
	}

// 	console.log(ending);
// 	console.log(target);
}

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("He has to give me a new name", "name"));
console.log(confirmEnding("Open sesame", "same"));
