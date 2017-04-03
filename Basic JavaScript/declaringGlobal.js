// https://www.freecodecamp.com/challenges/global-scope-and-functions

// Declare your variable here
oopsGlobal = "";

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line
var myGlobal = "";
function fun2() {
  var output = "";
  myGlobal = 10;
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
