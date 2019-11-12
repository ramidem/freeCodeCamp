// Object Oriented Crash Course
// https://www.youtube.com/watch?v=vDJpGenyHaA

/*
  Object Literals
  Constructor
  Prototypes
  Inherittance
  Object Create
  Classes
  Subclasses
*/

const s1 = "Hello";
console.log(typeof s1);

const s2 = new String("Hello");
console.log(typeof s2);

// Object Literals
const book1 = {
  title: "Book One",
  author: "Juan Dela Cruz",
  year: 2012,
  getSummary: function() {
    return `Written by ${this.author}, ${this.year}`;
  }
};

console.log(book1);
console.log(book1.title);
console.log(book1.getSummary());

const book2 = {
  title: "Book Two",
  author: "Juana Dela Paz",
  year: 2014,
  getSummary: function() {
    return `Written by ${this.author}, ${this.year}`;
  }
};

console.log(book2);
console.log(book2.title);
console.log(book2.getSummary());

console.log(Object.values(book2));
console.log(typeof Object.values(book2));

console.log(Object.keys(book2));

// Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.getSummary = function() {
    return `Written by ${this.author}, ${this.year}`;
  };
}

const consBook1 = new Book("Book One", "Juan Dela Cruz", "2013");
const consBook2 = new Book("Book Two", "Juan Dela Paz", "2014");

console.log(consBook1);
console.log(consBook1.getSummary());
console.log(consBook2);

// Prototypes
Book.prototype.getBookAge = function() {
  let thisYear = new Date().getFullYear();
  return thisYear - this.year;
};

Book.prototype.revise = function(newYear) {
  this.year = newYear;
  this.revised = true;
};

console.log(consBook2.getSummary());
console.log(consBook1.getBookAge());
console.log(consBook1.revise("2017"));
console.log(consBook1);

// Inherittance
// -- Magazine Constructor
function Magazine(title, author, year, month) {
  // Instance of Book
  Book.call(this, title, author, year);

  this.month = month;
}

// Inherrit Prototype
Magazine.prototype = Object.create(Book.prototype);

// Instantiate Magazine Object
const mag1 = new Magazine("Mag One", "John Doe", "2012", "Jan");

console.log(mag1);
console.log(mag1.getSummary());
console.log(mag1.getBookAge());
console.log(mag1.revise(2014));
console.log(mag1);
console.log(mag1.getBookAge());

// Object.create()
// -- Object of Protos
const bookProtos = {
  getSummary: function() {
    return `Written by ${this.author}, ${this.year}`;
  },
  getBookAge: function() {
    let thisYear = new Date().getFullYear();
    return thisYear - this.year;
  }
};

// Create Object
const book3 = Object.create(bookProtos);
book3.title = "Book Three";
book3.author = "King Kong";
book3.year = "2018";

console.log(book3);
console.log(book3.getBookAge());

const book4 = Object.create(bookProtos, {
  title: { value: "Book Four" },
  author: { value: "Lapu Lapu" },
  year: { value: "1869" }
});

console.log(book4);

// ES6 Classes
class Journal {
  constructor(author, start, end) {
    this.author = author;
    this.start = start;
    this.end = end;
  }

  getAuthorAge() {
    return this.end - this.start;
  }

  isRead(bool) {
    this.read = bool;
  }
}

// -- Instantiate Object
const marcoPolo = new Journal("Marco Polo", "1254", "1324");
const leonardoDaVinci = new Journal("Leonardo Da Vinci", "1452", "1519");
const charlesDarwin = new Journal("Charles Darwin", "1809", "1881");

console.log(marcoPolo);
console.log(marcoPolo.getAuthorAge());
console.log(leonardoDaVinci);
console.log(leonardoDaVinci.getAuthorAge());
console.log(charlesDarwin.isRead(true));
console.log(charlesDarwin.getAuthorAge());
console.log(charlesDarwin);

// Subclass
class Notebook extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}

// -- Instantiate Notebook
const notebook1 = new Notebook(
  "Calculus Notebook",
  "Med Aduh",
  "2007",
  "December"
);

console.log(notebook1);
console.log(notebook1.getSummary());

function Animal() {}
function Bird() {}
function Dog() {}

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Add your code below this line
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor);
console.log(beagle.constructor);
