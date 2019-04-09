const Person = function(firstAndLast) {
  var fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(first) {
    fullName = `${first} ${fullName.split(" ")[1]}`;
  };

  this.setLastName = function(last) {
    fullName = `${fullName.split(" ")[0]} ${last}`;
  };

  this.setFullName = function(fullname) {
    fullName = fullname;
  };
};

let bob = new Person("Bob Ross");

console.log(bob.getFullName());
console.log(bob.getFirstName());
console.log(bob.getLastName());

console.log(bob.setFirstName("Haskell"));
console.log(bob.getFirstName());

console.log(bob.setLastName("Curry"));
console.log(bob.getLastName());

console.log(bob.setFullName("Michael Jordan"));
console.log(bob.getFullName());
