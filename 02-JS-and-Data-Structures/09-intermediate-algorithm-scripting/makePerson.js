var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  let fName = firstAndLast;

  this.getFirstName = function() {
    return fName.split(" ")[0];
  };

  this.getLastName = function() {
    return fName.split(" ")[1];
  };

  this.getFullName = function() {
    return fName;
  };

  this.setFirstName = function(name) {
    fName = `${name} ${fName.split(" ")[1]}`;
  };

  this.setLastName = function(name) {
    fName = `${fName.split(" ")[0]} ${name}`;
  };

  this.setFullName = function(name) {
    fName = name;
  };
};

var bob = new Person("Bob Ross");
console.log(bob.getFullName());
console.log(bob.getFirstName());
console.log(bob.getLastName());

bob.setFirstName("Med");
console.log(bob.getFullName());

bob.setLastName("Aduh");
console.log(bob.getFullName());

bob.setFullName("DJ Khalid");
console.log(bob.getFullName());
