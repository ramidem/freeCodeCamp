function addTogether() {
  // check for a number
  // else, return undefined
  let checkNum = function(num) {
    if (typeof num !== "number") {
      return undefined;
    } else {
      return num;
    }
  };

  // check for two parameters that are numbers
  if (arguments.length > 1) {
    let a = checkNum(arguments[0]);
    let b = checkNum(arguments[1]);

    if (a === undefined || b === undefined) {
      return undefined;
    } else {
      return a + b;
    }
  } else {
    // if only one was found, return a new function that expects two
    // store first argument before entering the new function scope
    var c = arguments[0];

    if (checkNum(c)) {
      return function(arg2) {
        if (c === undefined || checkNum(arg2) === undefined) {
          return undefined;
        } else {
          return c + arg2;
        }
      };
    }
  }
}

console.log(addTogether(2, 3));
console.log(addTogether(2)(3));
