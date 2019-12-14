function orbitalPeriod(arr) {
  let GM = 398600.4418;
  let earthRadius = 6367.4447;
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let tmp = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(earthRadius + arr[i].avgAlt, 3) / GM)
    );

    delete arr[i].avgAlt;
    arr[i].orbitalPeriod = tmp;

    newArr.push(arr[i]);
  }

  return newArr;
}

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));

console.log(
  orbitalPeriod([
    { name: "iss", avgAlt: 413.6 },
    { name: "hubble", avgAlt: 556.7 },
    { name: "moon", avgAlt: 378632.553 }
  ])
);

// console.log(
//   Object.getOwnPropertyNames(Date.prototype)
//     .filter(name => name.startsWith("to"))
//     .map(method => `${method}: ${new Date()[method]()}`)
// );
