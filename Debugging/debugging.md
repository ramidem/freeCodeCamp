## Introduction to the Debugging Challenges

> Debugging is the process of finding and resolving defects or problems within a computer program that prevent correct operation of computer software or a system.
>
> - [Wikipedia](https://en.wikipedia.org/wiki/Debugging)

**Types of Errors:**

1. syntax errors that prevent a program from running.

```js
funtion willNotWork( {
  console.log("Yuck");
}
// "function" keyword is misspelled and there's a missing parenthesis
```

2. runtime errors when code fails to execute or has unexpected behavior.

```js
function loopy() {
  while (true) {
    console.log("Hello, world!");
  }
}
// Calling loopy starts an infinite loop, which may crash your browser
```

3. semantic (or logical) errors when code doesn't do what it's meant to.

```js
function calcAreaOfRect(w, h) {
  return w + h; // This should be w * h
}
let myRectArea = calcAreaOfRect(2, 3);
// Correct syntax and the program executes, but this gives the wrong answer
```

---

### Use the JavaScript Console to Check the Value of a Variable

The `console.log()` "_prints_" the output of what's within its parentheses to the console

```js
let a = 5;
let b = 1;
a++;

console.log(a);

let sumAB = a + b;
console.log(sumAB);
```

---

### Use typeof to Check the Type of a Variable

use `typeof` to check the data structure, or type, of a variable.

```js
let seven = 7;
let three = "3";
console.log(seven + three);
console.log(typeof seven);
console.log(typeof three);
```

---

### Catch Misspelled Variable and Function Names

Transposed, missing, or mis-capitalized characters in a variable or function name will have the browser looking for an object that doesn't exist - and complain in the form of a reference error. JavaScript variable and function names are case-sensitive.

```js
let receivables = 10;
let payables = 8;
let netWorkingCapital = recievables - payable;
console.log(`Net working capital is: ${netWorkingCapital}`);
```

---

### Catch Unclosed Parentheses, Brackets, Braces and Quotes

Another syntax error to be aware of is that all opening parentheses, brackets, curly braces, and quotes have a closing pair. Forgetting a piece tends to happen when you're editing existing code and inserting items with one of the pair types. Also, take care when nesting code blocks into others, such as adding a callback function as an argument to a method.

```js
let myArray = [1, 2, 3;
let arraySum = myArray.reduce((previous, current =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);
```

---

### Catch Mixed Usage of Single and Double Quotes

JavaScript allows the use of both single (`''`) and double (`""`) quotes to declare a string. Deciding which one to use generally comes down to personal preference, with some exceptions.

```js
// These are correct:
const grouchoContraction = "I've had a perfectly wonderful evening, but this wasn't it.";
const quoteInString = "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";
// This is incorrect:
const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it.';
```

---

### Catch Use of Assignment Operator Instead of Equality Operator

The assignment operator (`=`) in JavaScript assigns a value to a variable name. And the `==` and `===` operators check for equality (the triple `===` tests for strict equality, meaning both value and type are the same).

```js
let x = 1;
let y = 2;
if ((x = y)) {
  // this code block will run for any value of y (unless y were originally set as a falsy)
} else {
  // this code block is what should run (but won't) in this example
}
```

---

### Catch Missing Open and Closing Parenthesis After a Function Call

When a function or method doesn't take any arguments, you may forget to include the (empty) opening and closing parentheses when calling it. Often times the result of a function call is saved in a variable for other use in your code. This error can be detected by logging variable values (or their types) to the console and seeing that one is set to a function reference, instead of the expected value the function returns.

```js
function myFunction() {
  return "You rock!";
}
let varOne = myFunction; // set to equal a function
let varTwo = myFunction(); // set to equal the string "You rock!"
```

---

### Catch Arguments Passed in the Wrong Order When Calling a Function

If the arguments are different types, such as a function expecting an array and an integer, this will likely throw a runtime error.

```js
function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(exp, base);
console.log(power);
```

---

### Catch Off By One Errors When Using Indexing

**Off by one errors** (sometimes called **OBOE**) crop up when you're trying to target a specific index of a string or array (to slice or access a segment), or when looping over the indices of them. JavaScript indexing starts at zero, not one, which means the last index is always one less than the length of the item. If you try to access an index equal to the length, the program may throw an "index out of range" reference error or print `undefined`.

```js
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let len = alphabet.length;
for (let i = 0; i <= len; i++) {
  // loops one too many times at the end
  console.log(alphabet[i]);
}
for (let j = 1; j < len; j++) {
  // loops one too few times and misses the first character at index 0
  console.log(alphabet[j]);
}
for (let k = 0; k < len; k++) {
  // Goldilocks approves - this is just right
  console.log(alphabet[k]);
}
```

---

### Use Caution When Reinitializing Variables Inside a Loop

The following function is supposed to create a two-dimensional array with `m` rows and `n` columns of zeroes. Unfortunately, it's not producing the expected output because the `row` variable isn't being reinitialized (set back to an empty array) in the outer loop. Fix the code so it returns a correct 3x2 array of zeroes, which looks like `[[0, 0], [0, 0], [0, 0]]`.

```js
function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    // Adds the m-th row into newArray
    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);
```

this works!

```js
function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  for (let i = 0; i < m; i++) {
    // Adds the m-th row into newArray
    // newArray.push(0);
    let row = [];
    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);
```

---

### Prevent Infinite Loops with a Valid Terminal Condition

The `myFunc()` function contains an infinite loop because the terminal condition `i != 4` will never evaluate to `false` (and break the looping) - `i` will increment by `2` each pass, and jump right over `4` since `i` is odd to start. Fix the comparison operator in the terminal condition so the loop only runs `for i less than or equal to 4`.

```js
function myFunc() {
  for (let i = 1; i != 4; i += 2) {
    console.log("To infinity and beyond!");
  }
}

// this works
function myFunc() {
  for (let i = 1; i <= 4; i += 2) {
    console.log("Still going!");
  }
}
```
