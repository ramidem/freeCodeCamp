

function getIndexToIns(arr, num) {
//   arr.push(num);
//   arr.sort();
//   return arr.indexOf(num);

	arr.sort(function(a, b) {
		return a - b;
	});

	for (var a = 0; a < arr.length; a++) {
		if (arr[a] >= num)
			return parseInt(a);
	}

	return arr.length;
}


console.log(getIndexToIns([60, 40, 50], 50));
