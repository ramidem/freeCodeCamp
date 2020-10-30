// Use an Array to Store a Collection of Data
let myArray = ["apples", "bananas", "cat", 23, true];

// Access an Array's Contents Using Bracket Notation
let alphabets = ["a", "b", "c", "d"];
alphabets[1] = "e";
alphabets;

// Add Items to an Array with push() and unshift()
type NumStr = (number | string)[];
function mixedNumbers(arr: NumStr) {
  arr.unshift("I", 2, "three");
  arr.push(7, "VIII", 9);
  return arr;
}
console.log(mixedNumbers(["IV", 5, "six"]));

// Remove Items from an Array with pop() and shift()
function popShift(arr: string[]) {
  let popped = arr.pop();
  let shifted = arr.shift();
  return [shifted, popped];
}
console.log(popShift(["challenge", "is", "not", "complete"]));

// Remove Items Using splice()
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1, 4);
console.log(arr);

// Add Items Using splice()
function htmlColorNames(arr: string[]) {
  arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
  return arr;
}
console.log(
  htmlColorNames([
    "DarkGoldenRod",
    "WhiteSmoke",
    "LavenderBlush",
    "PaleTurquoise",
    "FireBrick",
  ])
);

// Copy Array Items Using slice()
function forecast(arr: string[]) {
  let weatherToday = arr.slice(2, 4);
  return weatherToday;
}
console.log(
  forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"])
);

// Copy an Array with the Spread Operator
function copyMachine(
  arr: Array<boolean | number | string>,
  num: number
): Array<boolean | number | string> {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]);
    num--;
  }
  return newArr;
}
console.log(copyMachine([true, false, true], 2));

// Combine Arrays with the Spread Operator
function spreadOut() {
  let fragment = ["to", "code"];
  return ["learning", ...fragment, "is", "fun"].join(" ");
}
console.log(spreadOut());

// Check For The Presence of an Element With indexOf()
function quickCheck(arr: string[], elem: string): boolean {
  if (arr.indexOf(elem) >= 0) {
    return true;
  }
  return false;
}
// console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));
// console.log(quickCheck(["squash", "onions", "shallots"], "squash"));

// Iterate Through All an Array's Items Using For Loops
function filteredArray(
  arr: Array<number[]> | Array<[string, number]>,
  elem: number
): Array<number[]> {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) < 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9],
    ],
    3
  )
);
console.log(
  filteredArray(
    [
      ["trumpets", 2],
      ["flutes", 4],
      ["saxophones", 2],
    ],
    2
  )
);

// Create complex multi-dimensional arrays
let myNestedArray = [
  "level 1",
  ["level 2"],
  [["level 3", "deep"]],
  [[["level 4", "deeper"]]],
  [[[["level 5", "deepest"]]]],
];

// Add Key-Value Pairs to JavaScript Objects
interface Foods {
  [key: string]: number;
}

let foods: Foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
};
foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;
console.log(foods);

// Modify an Object Nested Within an Object
let userActivity = {
  id: 23894201352,
  date: "January 1, 2017",
  data: {
    totalUsers: 51,
    online: 42,
  },
};
userActivity.data.online = 45;

console.log(userActivity);

// Access Property Names with Bracket Notation
function checkInventory(scannedItem: string) {
  return foods[scannedItem];
}
console.log(checkInventory("apples"));

// Use the delete Keyword to Remove Object Properties
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;

console.log(foods);

// Check if an Object has a Property
type UserObj = {
  age: number;
  online: boolean;
};
interface Users {
  [name: string]: UserObj;
}

let users: Users = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: false,
  },
};
let names = ["Alan", "Jeff", "Sarah", "Ryan"];

function isEveryoneHere(obj: Users, names: string[]) {
  return names.every((name) => obj.hasOwnProperty(name));
}
console.log(isEveryoneHere(users, names));

// Iterate Through the Keys of an Object with a for...in Statement
function countOnline(usersObj: Users) {
  let online = 0;
  for (let user in usersObj) {
    if (usersObj[user].online) online++;
  }
  return online;
}
console.log(countOnline(users));

// Generate an Array of All Object Keys with Object.keys()
function getArrayOfUsers(obj: Users) {
  return Object.keys(obj);
}
console.log(getArrayOfUsers(users));

// Modify an Array Stored in an Object
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
      country: "USA",
    },
  },
};

function addFriend(userObj, friend: string) {
  user.data.friends.push(friend);
  return user.data.friends;
}

console.log(addFriend(user, "Pete"));
