function zeroArray(rows, columns) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  let row = [];
  for (let i = 0; i < rows; i++) {
    // newArray.push([0]);

    for (let j = 0; j < columns; j++) {
      row.push(i);
    }

    // Adds the m-th row into newArray
    // newArray.push(0);
    // for (let j = 0; j < n; j++) {
    // Pushes n zeroes into the current row to create the columns
    // row.push(0);
    // }
    // Pushes the current row, which now has n zeroes in it, to the array
    // newArray.push(row);
  }
  console.log(row);
  return newArray.push(row);
}

let matrix = zeroArray(3, 2);
console.log(matrix);
