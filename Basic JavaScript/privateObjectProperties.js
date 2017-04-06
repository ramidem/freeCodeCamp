// https://www.freecodecamp.com/challenges/make-object-properties-private

var Car = function() {
  // this is a private variable
  var speed = 10;

  // these are public methods
  this.accelerate = function(change) {
    speed += change;
  };

  this.decelerate = function() {
    speed -= 5;
  };

  this.getSpeed = function() {
    return speed;
  };
};

var Bike = function() {

  var gear = 4;
  // Only change code below this line.
  this.setGear = function(change) {
    gear = change;

  };

  this.getGear = function() {
    return gear;
  };

};

var myCar = new Car();

var myBike = new Bike();
