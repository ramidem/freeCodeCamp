# Introduction to the Basic Data Structure Challenges

> In computer science, a data structure is a data organization, management and storage format that enables efficient access and modification. More precisely, a data structure is a collection of data values, the relationships among them, and the functions or operations that can be applied to the data.
>
> [Wikipedia](https://en.wikipedia.org/wiki/Data_structure)

```js
console.log("Hello");
```

## Use an Array to Store a Collection of Data

**_one-dimensional array_**, has only one level or that it does not have other arrays nested within it. It can contain `boolean`, `string`, and `numbers`, among other valid JavaScript data types.

```js
let simpleArray = ['one', 2, 'three’, true, false, undefined, null];
console.log(simpleArray.length);
```

**_multi-dimensional array_**, contains other arrays.

```js
let complexArray = [
  [
    {
      one: 1,
      two: 2
    },
    {
      three: 3,
      four: 4
    }
  ],
  [
    {
      a: "a",
      b: "b"
    }
  ]
];
```

## Access an Array's Contents Using Bracket Notation

_Index_, a **zeroth** based position of an element in the array.

```js
// access an element using bracket notation
console.log(simpleArray[0]); // 'one'
```

## Add Items to an Array with `push()` and `unshift()`

Arrays can be defined with a length of any number of elements, and elements can be added or removed over time; in other words, arrays are _mutable_.

`Array.prototype.push()` method adds one or more elements to the end of an array and returns the new length of the array. -- mdn

`Array.prototype.unshift()` method adds one or more elements to the beginning of an array and returns the new length of the array. -- mdn

```js
// `push()`
var animals = ["pigs", "goats", "sheep"];

console.log(animals.push("cows"));
// expected output: 4

console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

// `unshift()`
var array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// expected output: 5

console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]
```

## Remove Items from an Array with `pop()` and `shift()`

`pop()` removes an element from the end of an array.

`shift()` removes an element from the beginning.

The key difference between `pop()` and `shift()` and their cousins `push()` and `unshift()`, is that neither method takes parameters, and each only allows an array to be modified by a single element at a time.

```js
let greetings = ["whats up?", "hello", "see ya!"];

greetings.pop();
// now equals ['whats up?', 'hello']

greetings.shift();
// now equals ['hello']

let popped = greetings.pop();
// returns 'hello'
// greetings now equals []
```

## Remove Items Using `splice()`

`splice()` remove any number of consecutive elements from anywhere in an array and can take up to 3 parameters. `splice()` returns a new array containing the value of the removed elements

```js
let array = ["I", "am", "feeling", "really", "happy"];

let newArray = array.splice(3, 2); // start at 3rd index and take 2 elements
// newArray equals ['really', 'happy']
```

Take an array as an argument and return the sum of that array's elements.

```js
// `sumOfTen()`
function sumOfTen(arr) {
  arr.splice(1, 2);
  return arr.reduce((a, b) => a + b);
}

console.log(sumOfTen([2, 5, 1, 5, 2, 1]));
```

## Add Items Using `splice()`

`htmlColorNames()` takes an array of HTML colors as an argument. remove the first two elements of the array and add 'DarkSalmon' and 'BlanchedAlmond' in their respective places.

```js
function htmlColorNames(arr) {
  arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
  return arr;
}

console.log(
  htmlColorNames([
    "DarkGoldenRod",
    "WhiteSmoke",
    "LavenderBlush",
    "PaleTurqoise",
    "FireBrick"
  ])
);
```

## Copy Array Items Using `slice()`

`slice()`, rather than modifying an array, _copies_, or _extracts_, a given number of elements to a new array, leaving the array it is called upon untouched.

`forecast()` takes an array as an argument. Extract information from the argument array and return a new array that contains the elements `warm` and `sunny`.

```js
function forecast(arr) {
  return arr.slice(2, 4);
}

console.log(
  forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"])
);
```

## Copy an Array with the Spread Operator

**Spread syntax** allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected. -- MDN

```js
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
// thatArray equals [true, true, undefined, false, null]
// thisArray remains unchanged, and is identical to thatArray
```

`copyMachine()` takes `arr` (an array) and `num` (a number) as arguments. The function is supposed to return a new array made up of `num` copies of `arr`.

```js
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]);
    num--;
  }
  return newArr;
}

// change code here to test different cases:
console.log(copyMachine([true, false, true], 2));
```

## Combine Arrays with the Spread Operator

`spreadOut()` returns the variable `sentence`. using the _spread_ (`...`) operator, it returns the array `['learning', 'to', 'code', 'is', 'fun']`.

```js
function spreadOut() {
  let fragment = ["to", "code"];
  let sentence = ["learning", ...fragment, "is", "fun"];
  return sentence;
}

console.log(spreadOut());
```

## Check For The Presence of an Element With `indexOf()`

`indexOf()` method returns the first index at which a given element can be found in the array, or `-1` if it is not present. -- MDN

```js
function quickCheck(arr, elem) {
  if (arr.indexOf(elem) === -1) {
    return false;
  }
  return true;
}

console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));
```

## Iterate Through All an Array's Items Using For Loops

```js
function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
// returns [12, 14, 80]
```

`filteredArray()` takes `arr`, a nested array, and `elem` as arguments, and returns a new array. `elem` represents an element that may or may not be present on one or more of the arrays nested within `arr`. Using `for` loop, any array nested within `arr` containing `elem` will be removed.

```js
function filteredArray(arr, elem) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
```

## Create complex multi-dimensional arrays

```js
let myNestedArray = [
  ["unshift", false, 1, 2, 3, "complex", "nested"],
  ["loop", "shift", 6, 7, 1000, "method"],
  ["concat", false, true, "spread", "array", ["deep"]],
  ["mutate", 1327.98, "splice", "slice", "push", [["deeper"]]],
  ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth", [[["deepest"]]]]
];
```

## Add Key-Value Pairs to JavaScript Objects

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;

console.log(foods);
```

## Modify an Object Nested Within an Object

```js
let userActivity = {
  id: 23894201352,
  date: "January 1, 2017",
  data: {
    totalUsers: 51,
    online: 42
  }
};

userActivity.data.online = 45;

console.log(userActivity);
```

## Access Property Names with Bracket Notation

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  return foods[scannedItem];
}

console.log(checkInventory("apples"));
```

## Use the `delete` Keyword to Remove Object Properties

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

delete foods.oranges;
delete foods.plums;
delete foods.strawberries;

console.log(foods);
```

## Check if an Object has a Property

```js
function isEveryoneHere(obj) {
  return users.hasOwnProperty("Alan", "Jeff", "Sarah", "Ryan") ? true : false;
}
```

## Iterate Through the Keys of an Object with a `for...in` Statement

```js
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function countOnline(obj) {
  let active = 0;
  for (let user in obj) {
    if (obj[user].online == true) {
      active += 1;
    }
  }

  return active;
}

console.log(countOnline(users));
```

## Generate an Array of All Object Keys with `Object.keys()`

```js
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  return Object.keys(obj);
}

console.log(getArrayOfUsers(users));
```

## Modify an Array Stored in an Object

```js
let user = {
  name: "Kenneth",
  age: 28,
  data: {
    username: "kennethCodesAllDay",
    joinDate: "March 26, 2016",
    organization: "freeCodeCamp",
    friends: ["Sam", "Kira", "Tomo"],
    location: {
      city: "San Francisco",
      state: "CA",
      country: "USA"
    }
  }
};

function addFriend(userObj, friend) {
  user.data.friends.push(friend);
  return user.data.friends;
}

console.log(addFriend(user, "Pete"));
```
