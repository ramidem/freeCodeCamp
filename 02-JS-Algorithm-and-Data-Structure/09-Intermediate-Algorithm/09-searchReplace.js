// Search and Replace
/**
 * @first argument is the sentence to perform the search and replace on.
 * @second argument is the word that will be replaced (before)
 * @third argument is what will replace the second argument (after)
 *
 * preserve the case of the first character in the original word.
 */

function myReplace(str, before, after) {
  let replacement = "";

  if (before[0] !== before[0].toUpperCase()) {
    replacement = after;
  } else {
    replacement = after[0].toUpperCase() + after.slice(1);
  }

  return str.replace(before, replacement);
}

console.log(
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
);

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
