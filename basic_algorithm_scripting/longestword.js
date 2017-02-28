function findLongestWord(str) {
  var arr = str.split(" ");
	var len = 0;
	var longest = "";

	for (var i = 0; i < arr.length; i++ ) {
		if (arr[i].length > len) {
			var len = arr[i].length;
			longest = arr[i];
		}
	}
	return len;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
