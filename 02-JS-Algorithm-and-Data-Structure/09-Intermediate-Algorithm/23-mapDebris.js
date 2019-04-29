function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var a = 2 * Math.PI;
  console.log(a);

  var newArr = [];
  var getOrbPeriod = function(obj) {
    var c = Math.pow(earthRadius + obj.avgAlt, 3);
    console.log(c);

    var b = Math.sqrt(c / GM);
    console.log(b);

    var orbPeriod = Math.round(a * b);
    console.log(orbPeriod);

    console.log(obj.avgAlt);
    delete obj.avgAlt;

    obj.orbitalPeriod = orbPeriod;
    console.log(obj.orbitalPeriod);

    console.log(obj);
    return obj;
  };

  for (var elem in arr) {
    newArr.push(getOrbPeriod(arr[elem]));
  }

  return newArr;
}

// test here
console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));
