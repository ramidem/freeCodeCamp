// the global variable
var bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae"
];

/* This function should add a book to the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function add(arr, bookName) {
  var books = arr.slice();

  books.push(bookName);

  return books;

  // Add your code above this line
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function remove(arr, bookName) {
  var books = arr.slice();
  var index = books.indexOf(bookName);
  if (index >= 0) {
    var first = books.splice(0, index);
    var second = books.slice(index);
    return first.concat(second);

    // Add your code above this line
  }
}

var newBookList = add(bookList, "A Brief History of Time");
var newerBookList = remove(bookList, "On The Electrodynamics of Moving Bodies");
var newestBookList = remove(
  add(bookList, "A Brief History of Time"),
  "On The Electrodynamics of Moving Bodies"
);

console.log(bookList);
console.log(newBookList);
console.log(newerBookList);
console.log(newestBookList);
