// While Loop
function repeatStringNumTimes(str, num) {
  var res = [];
  var i = 0;

  while (i < num) {
      res.push(str);
      i++;
  }
  return res.join('');
}


//  For Loop
function repeatStringNumTimes(str, num) {
  var res = [];
	for (var i = 0; i < num; i++) {
		res.push(str);
	}
	return res.join('');
}


// recursion
function repeatStringNumTimes(str, num) {
  if(num < 0)
    return "";
  if(num === 1)
    return str;
  else
    return str + repeatStringNumTimes(str, num - 1);
}

repeatStringNumTimes("***", 3);
