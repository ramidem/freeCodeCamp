function whatIsInAName(collection, source) {
  // What's in a name?
  let sources = Object.keys(source);

  return collection.filter(obj => {
    for (let i = 0; i < sources.length; i++) {
      if (
        !obj.hasOwnProperty(sources[i]) ||
        obj[sources[i]] !== source[sources[i]]
      ) {
        return false;
      }
    }

    return true;
  });
}

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" }
    ],
    { last: "Capulet" }
  )
);

console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, bat: 2 }
  )
);
