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


// OR just

return str.endsWith(target);

// 	console.log(ending);
// 	console.log(target);
}

// https://medium.freecodecamp.com/two-ways-to-confirm-the-ending-of-a-string-in-javascript-62b4677034ac#.yp97l6s1u

function confirmEnding(str, target) {
  if(str.substr(-target.length) === target) {
    return true;
  } else {
    return false;
  }

  // alternatively
  //return  (str.substr(-target.length) === target) ? true : false;
}


console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("He has to give me a new name", "name"));
console.log(confirmEnding("Open sesame", "same"));
