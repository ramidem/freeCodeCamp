
function bouncer(arr) {
	return arr.filter(Boolean);
}

console.log(bouncer([7, "ate", "", false, 9, NaN, null, 0, undefined]));
