// truncate a str if it is longer than the given maximum length.
// retrun truncated str with a ... ending.

function truncateString(str, num) {
  let truncated = "";

  if (str.length > num) {
    truncated = `${str.slice(0, num)}...`;
  } else {
    truncated = str;
  }

  return truncated;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

console.log(
  truncateString(
    "A-tisket a-tasket A green and yellow basket",
    "A-tisket a-tasket A green and yellow basket".length + 2
  )
);
