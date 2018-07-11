var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1) {
    name = names[0];
  } else if (strokes <= par - 2) {
    name = names[1];
  } else if (strokes == par - 1) {
    name = names[2];
  } else if (strokes == par) {
    name = names[3];
  } else if (strokes == par + 1) {
    name = names[4];
  } else if (strokes == par + 2) {
    name = names[5];
  } else if (strokes >= par + 3) {
    name = names[6];
  }

  return name;
  // Only change code above this line
}

// Change these values to test
console.log(golfScore(5, 4))
