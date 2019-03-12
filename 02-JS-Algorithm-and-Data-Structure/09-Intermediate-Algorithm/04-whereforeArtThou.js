// Wherefore art thou
// Looks through an array of objects (first argument) and returns an array of
// all the objects that have matching name and value pairs (second argument)

function whatIsInAName(collection, source) {
  var keys = Object.keys(source);

  return collection.filter(obj => {
    for (let i = 0; i < keys.length; i++) {
      if (!obj.hasOwnProperty(keys[i]) || obj[keys[i]] !== source[keys[i]]) {
        return false;
      }
    }

    return true;
  });

  // return keys;
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
