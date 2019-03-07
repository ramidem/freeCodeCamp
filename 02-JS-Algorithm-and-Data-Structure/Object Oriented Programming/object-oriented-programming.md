# Introduction to the Object Oriented Programming Challenges

As its name implies, object oriented programming organizes code into object definitions. These are sometimes called classes, and they group together data with related behavior. The data is an object's attributes, and the behavior (or functions) are methods.

## Create a Basic JavaScript Object

_Objects_ are tangible things peaople can observe and interact with.

- `properties` define what makes up an `object`
- same `objects` may share same `properties` but may have different values for those `properties`

`objects` in JavaScript are used to model real-world _objects_, giving them properties and behavior just like their real-world counterparts.

```js
let duck = {
  name: "Aflac",
  numLegs: 2
};
```

## Use Dot Notation to Access the Properties of an Object

```js
console.log(duck.name); // "Aflac"
```

## Create a Method on an Object

`objects` can have a special type of `property`, called a `method`.

`Methods` are `properties` that are functions. This adds different behavior to an `object`.

```js
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {
    return `The name of the duck is ${duck.name}`;
  }
};

console.log(duck.sayName()); // "The name if the duck is Aflac."
```

## Make Code More Reusable with the `this` Keyword

> The JavaScript context object in which the current code is executing.
>
> [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)

```js
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {
    return `The name of the duck is ${this.name}`;
  }
};

console.log(duck.sayName()); // "The name if the duck is Aflac."
```

## Define a Constructor Function

`Constructors` are functions that create new objects. They define properties and behaviors that will belong to the new object.

```js
function Bird() {
  // `this` inside the constructor always refers to the object being created
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}
```

- `Constructors` are defined with a capitalized name to distinguish them from other functions that are not `constructors`.
- `Constructors` use the keyword `this` to set properties of the object they will create. Inside the `constructor`, `this` refers to the new object it will create.
- `Constructors` define properties and behaviors instead of returning a value as other functions might.

## Use a Constructor to Create Objects

```js
let blueBird = new Bird();
```

`new` operator tells JavaScript to create new `instance` of `Bird` called `blueBird`. `this` points to the newly created object -- `blueBird`

```js
blueBird.name; // => Albert
blueBird.color; // => blue
blueBird.numLegs; // => 2
```

## Extend Constructors to Receive Arguments

```js
function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let cardinal = new Bird("Robin", "maroon");
```

## Verify an Object's Constructor with `instanceof`

`instanceof` allows you to compare an object to a constructor, returning `true` or `false` based on whether or not that object was created with the `constructor`.

```js
cardinal instanceof Bird; // true
crow instanceof Bird; // false
```

## Understand Own Properties

```js
let ownProps = [];

for (let property in duck) {
  if (duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps); // prints [ "name", "numLegs" ]
```

## Use Prototype Properties to Reduce Duplicate Code

> Nearly all objects in JavaScript are instances of `Object`; a typical object
> inherits properties (including methods) from `Object.prototype`, although these
> properties may be shadowed (a.k.a. overridden). However, an Object may be
> deliberately created for which this is not true (e.g. by Object.create(null)),
> or it may be altered so that this is no longer true (e.g. with Object.setPrototypeOf).
>
> [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype#Description)

```js
Bird.prototype.numLegs = 2;
```

## Iterate Over All Properties

Properties

- `own`
- `prototype`

```js
function Bird(name) {
  this.name = name; // own property
}

Bird.prototype.color = "yellow"; // prototype property
```

Adding `own` properties to `ownProps` and `prototype` properties to `prototypeProps`

```js
let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
  if (duck.hasOwnProperty(property)) {
    // has own property
    ownProps.push(property);
  } else {
    // has prototype property
    prototypeProps.push(property);
  }
}

console.log(ownProps); // prints ["name"]
console.log(prototypeProps); // prints ["numLegs"]
```

## Understand the Constructor Property

`constructor` property is a reference to the constructor function that created the instance.

`instanceof` if generally preferred over `constructor`

```js
function Dog(name) {
  this.name = name;
}

function isDog(dogName) {
  return dogName.constructor === Dog ? true : false;
}
```

## Change the Prototype to a New Object

All properties all at once by setting `prototype` to a new object that already contains the properties

```js
Dog.prototype = {
  numLegs: 4,
  eat: function() {
    console.log("nom nom");
  },

  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

## Remember to Set the Constructor Property when Changing the Prototype

```js
Dog.prototype = {
  // define the constructor property
  constructor: Bird,
  numLegs: 4,
  eat: function() {
    console.log("nom nom");
  },

  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

## Understand Where an Object’s Prototype Comes From

An `object` inherits its `prototype` directly from the constructor function that created it

```js
let darko = new Dog("Darko");

Dog.prototype.isPrototypeOf(darko); // true
```

## Understand the Prototype Chain

An object's prototype itself is an object.

A `prototype` can have its own `prototype`

```js
// Dog.prototype is Object.prototype
typeof Dog.prototype; // object
```

The `hasOwnProperty` method is defined in `Object.prototype`.

`Object` is a `supertype` for all objects in JavaScript. Therefore, any object can use the `hasOwnProperty` method.

```js
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle); // => true

Object.prototype.isPrototypeOf(Dog.prototype);
```

## Use Inheritance So You Don't Repeat Yourself

**Don't Repeat Yourself (DRY)**

> a principle of software development aimed at reducing repetition of software patterns,replacing it with abstractions or using data normalization to avoid redundancy.
>
> [Wikipedia](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)

```js
function Animal() {}

// supertype
Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear
};
```

## Inherit Behaviors from a Supertype

Set the `prototype` of `supertype`

**Inherittance**

> Inheritance in most class-based object-oriented languages is a mechanism in which one object acquires all the properties and behaviors of another object.
>
> [Codeburst](https://codeburst.io/javascript-inheritance-25fe61ab9f85)

```js
let animal = Object.create(Animal.prototype);
```

`Object.create(obj)` creates a new object, and sets `obj` as the new object's `prototype`

```js
animal.eat(); // prints "nom nom nom"
animal instanceof Animal; // => true
```

## Set the Child's Prototype to an Instance of the Parent

Set the `prototype` of `subtype`

```js
Bird.prototype = Object.create(Animal.prototype);

let duck = new Bird("Donald");

duck.eat(); // "nom nom nom"
```

## Reset an Inherited Constructor Property

When an `object` inherits its `prototype` from another object, it also inherits the `supertype`'s constructor property.

```js
function Bird() {}
Bird.prototype = Object.create(Animal.prototype);

let duck = new Bird();

duck.constructor; // function Animal(){...}
```

Reset

```js
Bird.prototype.constructor = Bird;
duck.constructor; // function Bird(){...}
```

## Add Methods After Inheritance

A constructor function that inherits its `prototype` object from a `supertype` constructor function can still have its own methods in addition to inherited methods

```js
function Animal() {}
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};

function Bird() {}
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
```

Unique prototype for `Bird`

```js
Bird.prototype.fly = function() {
  console.log("I'm flying!");
};
```

## Override Inherited Methods

Override an inheritted method by adding a method to `ChildObject.prototype` using the same method name as the one to override.

```js
function Animal() {}
Animal.prototype.eat = function() {
  return "nom nom nom";
};
function Bird() {}

// Inherit all methods from Animal
Bird.prototype = Object.create(Animal.prototype);

// Bird.eat() overrides Animal.eat()
Bird.prototype.eat = function() {
  return "peck peck peck";
};
```

## Use a Mixin to Add Common Behavior Between Unrelated Objects

A `mixin` allows other objects to use a collection of functions.

```js
// The flyMixin takes any object and gives it the fly method.
let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  };
};

let bird = {
  name: "Donald",
  numLegs: 2
};

let plane = {
  model: "777",
  numPassengers: 524
};

flyMixin(bird);
flyMixin(plane);
```

## Use Closure to Protect Properties Within an Object from Being Modified Externally

```js
function Bird() {
  // private property
  let hatchedEgg = 10;

  // privileged method because it has access to hatchEgg
  // publicly available method that a bird object can use
  this.getHatchedEggCount = function() {
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount(); // returns 10
```

## Understand the `Immediately Invoked Function Expression` (IIFE)

```js
(function() {
  console.log("Chirp, chirp!");
})(); // this is an anonymous function expression that executes right away
// Outputs "Chirp, chirp!" immediately
```

Note that the function has no name and is not stored in a variable. The two parentheses () at the end of the function expression cause it to be immediately executed or invoked

## Use an IIFE to Create a Module

An `immediately invoked function expression` (`IIFE`) is often used to group related functionality into a single `object` or `module`

```js
let motionModule = (function() {
  return {
    glideMixin: function(obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  };
})();

motionModule.glideMixin(duck);
duck.glide();
```
