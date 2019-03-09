// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  var newArray = [];
  console.log(this);
  for (let i = 0; i < this.length; i++) {
    console.log(this[i]);
    // newArray.push(callback(this[i]));
    newArray.push(callback(this[i]));
    console.log(typeof callback());
  }
  // Add your code above this line
  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});

console.log(new_s);
