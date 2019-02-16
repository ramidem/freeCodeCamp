## Regular Expression Challenges

Regular expressions are special strings that represent a search pattern. Also known as "regex" or "regexp", they help programmers match, search, and replace text.

### Using the Test Method

The `.test()` method takes the regex, applies it to a string (which is placed inside the parentheses), and returns true or false if your pattern finds something or not.

```js
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);
```

### Match Literal Strings

It matches the first occurrence of that character/word in the string.

### Match a Literal String with Different Possibilities

You can search for multiple patterns using the `alternation` or `OR` operator: `|`

```js
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);
```

### Ignore Case While Matching

`i` ignores cases.

```js
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
let result = fccRegex.test(myString);
```

### Extract Matches

Extract the actual matches you found with the `.match()` method

```js
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);
```

### Find More Than the First Match

`g` for global search.

```js
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result = twinkleStar.match(starRegex);
```

### Match Anything with Wildcard Period

The wildcard character `.` will match any one character. The wildcard is also called `dot` and `period`.

```js
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result = unRegex.test(exampleStr);
```

### Match Single Character with Multiple Possibilities

You can search for a literal pattern with some flexibility with `character classes`. `Character classes` allow you to define a group of characters you wish to match by placing them inside square (`[` and `]`) brackets.

```js
let quoteSample =
  "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let result = quoteSample.match(vowelRegex);
```

### Match Letters of the Alphabet

Inside a `character set`, you can define a range of characters to match using a hyphen character: `-`.

```js
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let result = quoteSample.match(alphabetRegex);
```

### Match Numbers and Letters of the Alphabet

```js
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi;
let result = quoteSample.match(myRegex);
```

### Match Single Characters Not Specified

`negated character sets` are sets you do not want to match. Use `^`.

```js
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi;
let result = quoteSample.match(myRegex);
```

### Match Characters that Occur One or More Times

`+` matches a character (or group of characters) that appears one or more times in a row.

```js
let difficultSpelling = "Mississippi";
let myRegex = /s+/gi;
let result = difficultSpelling.match(myRegex);
```

### Match Characters that Occur Zero or More Times

`asterisk` or `star`: `*`, matches characters that occur zero or more times.

```js
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;

soccerWord.match(goRegex); // Returns ["goooooooo"]
gPhrase.match(goRegex); // Returns ["g"]
oPhrase.match(goRegex); // Returns null
```

### Find Characters with Lazy Matching

`?` or `lazy` match finds the smallest possible part of the string that satisfies the regex pattern.

`/t[a-z]*?i/` returns `["ti"]`

```js
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.[a-z0-9]*>/gi;
let result = text.match(myRegex);
```

### Find One or More Criminals in a Hunt

Write a `greedy` regex that finds one or more criminals within a group of other people. A criminal is represented by the capital letter `C`.

```js
let crowd = "P1P2P3P4P5P6CCCP7P8P9";
let reCriminals = /c+/gi;
let matchedCriminals = crowd.match(reCriminals);
// console.log(matchedCriminals);
```

### Match Beginning String Patterns

`caret` (`^`) is used to search for patterns at the beginning of strings.

```js
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;

firstRegex.test(firstString); // Returns true

let notFirst = "You can't find Ricky now.";

firstRegex.test(notFirst); // Returns false
```

### Match Ending String Patterns

You can search the end of strings using the `dollar` sign character `$` at the end of the regex.

```js
let theEnding = "This is a never ending story";
let storyRegex = /story$/;

storyRegex.test(theEnding); // Returns true

let noEnding = "Sometimes a story will have to end";

storyRegex.test(noEnding); // Returns false
```

### Match All Letters and Numbers

`\w` shortcut is equal to `[A-Za-z0-9_]`. This `character class` matches upper and lowercase letters plus numbers. Note, this `character class` also includes the underscore character (`_`).

```js
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";

longHand.test(numbers); // Returns true
shortHand.test(numbers); // Returns true
longHand.test(varNames); // Returns true
shortHand.test(varNames); // Returns true

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g;
let result = quoteSample.match(alphabetRegexV2).length;
```

### Match Everything But Letters and Numbers

You can search for the opposite of the `\w` with `\W`. Note, the opposite pattern uses a capital letter. This shortcut is the same as `[^A-Za-z0-9_]`.

```js
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";

numbers.match(shortHand); // Returns ["%"]
sentence.match(shortHand); // Returns ["!"]

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;
```

### Match All Numbers

`\d` is equal to the `character class` `[0-9]`, which looks for a single character of any number between zero and nine.

```js
let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g;
let result = numString.match(numRegex).length;
```

### Match All Non-Numbers

`\D` is equal to the `character class` `[^0-9]`, which looks for a single character that is not a number between zero and nine.

```js
let numString = "Your sandwich will be $5.00";
let noNumRegex = /\D/g;
let result = numString.match(noNumRegex).length;
```

### Restrict Possible Usernames

1. The only numbers in the username have to be at the end. There can be zero or more of them at the end.

2. Username letters can be lowercase and uppercase.

3. Usernames have to be at least two characters long. A two-letter username can only use alphabet letter characters.

```js
let username = "JackOfAllTrades";
let userCheck = /^[a-z]{2,}\d*$/i; // Change this line
let result = userCheck.test(username);
```

I have no idea how this works. Because [here](regexr.com/48gir), it is not doing anything.

### Match Whitespace

`\s` pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters. You can think of it as similar to the `character class` `[ \r\t\f\n\v]`.

```js
let whiteSpace = "Whitespace. Whitespace everywhere!";
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex); // Returns [" ", " "]
```

### Match Non-Whitespace Characters

`\S` pattern will not match whitespace, carriage return, tab, form feed, and new line characters. You can think of it being similar to the `character clas`s `[^ \r\t\f\n\v]`.

```js
let whiteSpace = "Whitespace. Whitespace everywhere!";
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length; // Returns 32
```

### Specify Upper and Lower Number of Matches

`Quantity specifiers` are used with curly brackets (`{` and `}`). You put two numbers between the curly brackets - for the lower and upper number of patterns.

```js
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;

multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false

// Again, not sure what is going on
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/;
let result = ohRegex.test(ohStr);
```

### Specify Only the Lower Number of Matches

To only specify the lower number of patterns, keep the first number followed by a comma.

```js
let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;

multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false
multipleA.test(A100); // Returns true

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}/;
let result = haRegex.test(haStr);
```

### Specify Exact Number of Matches

To specify a certain number of patterns, just have that one number between the curly brackets.

```js
let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;

multipleHA.test(A4); // Returns false
multipleHA.test(A3); // Returns true
multipleHA.test(A100); // Returns false

let timStr = "Timmmmber";
let timRegex = /Tim{4}/g;
let result = timRegex.test(timStr);
```

### Check for All or None

You can specify the possible existence of an element with a question mark, ?. This checks for zero or one of the preceding element. You can think of this symbol as saying the previous element is optional.

```js
let american = "color";
let british = "colour";
let rainbowRegex = /colou?r/;

rainbowRegex.test(american); // Returns true
rainbowRegex.test(british); // Returns true

let favWord = "favorite";
let favRegex = /favou?rite/;
let result = favRegex.test(favWord);
```

### Positive and Negative Lookahead

`Lookaheads` are patterns that tell JavaScript to look-ahead in your string to check for patterns further along.

`positive lookahead` will look to make sure the element in the search pattern is there, but won't actually match it. A `positive lookahead` is used as (`?=...`) where the `...` is the required part that is not matched.

`negative lookahead` will look to make sure the element in the search pattern is not there. A `negative lookahead` is used as (`?!...`) where the `...` is the pattern that you do not want to be there. The rest of the pattern is returned if the `negative lookahead` part is not present.

```js
let quit = "qu";
let noquit = "qt";
let quRegex = /q(?=u)/;
let qRegex = /q(?!u)/;

quit.match(quRegex); // Returns ["q"]
noquit.match(qRegex); // Returns ["q"]

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;

checkPass.test(password); // Returns true

let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=\D*\d{2})/;
let result = pwRegex.test(sampleWord);
```

### Reuse Patterns Using Capture Groups

`capture groups`. Parentheses, `(` and `)`, are used to find repeat substrings. You put the regex of the pattern that will repeat in between the parentheses.

```js
let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;

repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["regex regex", "regex"]

let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
let result = reRegex.test(repeatNum);
```

### Use Capture Groups to Search and Replace

You can search and replace text in a string using `.replace()` on a string. The inputs for `.replace()` is first the regex pattern you want to search for. The second parameter is the string to replace the match or a function to do something.

```js
let wrongText = "The sky is silver.";
let silverRegex = /silver/;

wrongText.replace(silverRegex, "blue"); // Returns "The sky is blue."

let huhText = "This sandwich is good.";
let fixRegex = /good/; // Change this line
let replaceText = "okey-dokey"; // Change this line
let result = huhText.replace(fixRegex, replaceText);
```

### Remove Whitespace from Start and End

```js
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line
```
