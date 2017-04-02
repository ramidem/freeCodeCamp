
function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);
  args.splice(0, 1);

	function element(val) {
		return args.indexOf(val) === -1;
	}

  return arr.filter(element);
}

console.log(destroyer([1, 4, 2, 3, 1, 2, 3], 2, 3, 4));
