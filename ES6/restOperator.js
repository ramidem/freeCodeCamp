const sum = (function() {
  "use strict";
  return function sum(...args) {
    // const args = [ x, y, z ];
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6

const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function() {
  "use strict"; // do not change this line

  // change code below this line
  return function half({ max, min }) {
    // const { max, min } = stats;
    // use function argument destructuring
    return (stats.max + stats.min) / 2.0;
  };
  // change code above this line
})();
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015
