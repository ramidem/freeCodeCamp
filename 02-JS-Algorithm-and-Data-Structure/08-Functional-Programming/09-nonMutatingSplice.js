// splice method mutates the original array it is called on.

function nonMutatingSplice(cities) {
  // so, use slice
  return cities.slice(0, 3);
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);
