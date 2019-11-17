let arr = [1, 2, 3];

let addArr = item => ++item;
let sumArr = (acc, item) => acc + item;

console.log(arr.map(addArr).reduce(sumArr, 0));

console.log(arr);

// Functional Function
// -- Isolated - no dependence on the state of the program, which includes
//               global variables that are subject to change
// -- Pure Functions - Same Input, Same Output

// Terminology
// -- Callbacks- functions passed into another function

// All Functions are First-Class Functions

// Higher Order - functions that take a function as an argument, or
//               return a function as a value

const prepareGreenTea = () => "greenTea";
const prepareBlackTea = () => "blackTea";

const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};

const teamGreen4TeamFCC = getTea(prepareGreenTea, 40);
const teamBlack4TeamFCC = getTea(prepareBlackTea, 40);

// console.log(teamBlack4TeamFCC);
// console.log(teamGreen4TeamFCC);

// Hazards of Imperative Code

// tabs is an array of titles of each site open within the window
var Window = function(tabs) {
  this.tabs = tabs; // we keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function(otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function(tab) {
  this.tabs.push("new tab"); // let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function(index) {
  // Only change code below this line
  var tabsBeforeIndex = this.tabs.slice(0, index); // get the tabs before the tab
  var tabsAfterIndex = this.tabs.slice(index + 1); // get the tabs after the tab

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // join them together
  // Only change code above this line

  return this;
};

// Let's create three browser windows
var workWindow = new Window([
  "GMail",
  "Inbox",
  "Work mail",
  "Docs",
  "freeCodeCamp"
]); // Your mailbox, drive, and other work sites
var socialWindow = new Window(["FB", "Gitter", "Reddit", "Twitter", "Medium"]); // Social sites
var videoWindow = new Window(["Netflix", "YouTube", "Vimeo", "Vine"]); //  Entertainment sites

// Now perform the tab opening, closing, and other operations
var finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());

console.log(finalTabs.tabs);

// ===

// Avoid Mutations and Side Effects
let fixedValue = 4;

function incrementer(plusOne) {
  // Pass Arguments to Avoid External Dependence in a Function
  return plusOne + 1;
}

console.log(incrementer(fixedValue));
console.log(fixedValue);

// Refactor Global Variables Out of Functions

// the global variable
var bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae"
];

/* This function should add a book to the list and return the list */
// New parameters should come before bookName

// Add your code below this line
function add(bookList, bookName) {
  return bookList.concat([bookName]);
  // Add your code above this line
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function remove(bookName) {
  if (bookList.indexOf(bookName) >= 0) {
    var index = bookList.indexOf(bookName);
    return bookList.slice(0, index).concat(bookList.slice(index + 1));
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
