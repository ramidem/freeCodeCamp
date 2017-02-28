// For Loop
/*
function factorialize(num) {
  if (num === 0 || num === 1) {
    return 1;
  }

  for (var i = num-1; i > 0; i--) {
    num = num * i;
  }
  return num;
}
*/

// While Loop
/*
function factorialize(num) {
  var result = num;

  if (num === 0 || num === 1) {
    return 1;
  }

  while (num > 1) {
    num--;
    result = result * num;
  }

  return result;
}
*/

// Recursion
function factorialize(num) {
  if (num < 0)
    return -1;
  else if (num === 0)
    return 1;
  else {
    return (num * factorialize(num -1));
  }
}

factorialize(1);
