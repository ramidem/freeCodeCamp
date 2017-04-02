// for Loop Method
function largestOfFour(arr) {
	var results = []; // set blank array
  for (var i = 0; i < arr.length; i++) {
		var longestNumber = 0; // reset
		for (var j = 0; j < arr.length; j++) {
			if (arr[i][j] > longestNumber) {
				longestNumber = arr[i][j]; // if longestNumber is less than arr[i][j], assign the latter to the former.
			};
			results[i] = longestNumber;
		};
	}
	return results
}

// other for Loop Method using .push()
function largestOfFour(arr) {
  var results = [];
  for (var i = 0; i < arr.length; i ++) {
    var longestNumber = 0;
    for (var j = 0; j < arr.length; j++) {
      if (longestNumber < arr[i][j]) {
        longestNumber = arr[i][j];
      }
//       results[i] = longestNumber;
    }
    results.push(longestNumber);
  }
  return results;
}

// another for Loop Method
function largestOfFour(arr) {
	var largest = [0,0,0,0];

	for(var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr[i].length; j++) {
			if (arr[i][j] > largest[i]) {
				largest[i] = arr[i][j];
			}
		}
	}
	return largest;
}

// using map() and reduce()
function largestOfFour(arr) {
	return arr.map(function(subArr) {
		return subArr.reduce(function(pLN, cLN) {
			return (cLN > pLN ? cLN : pLN);
		}, 0);
	});
}

// using map() and apply()
function largestOfFour(arr) {
	return arr.map(function(subArr) {
		return Math.max.apply(null, subArr);
	})
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
