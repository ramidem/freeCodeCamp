function truncateString(str, num) {
  // Clear out that junk in your trunk
  // return `${str.slice(0, 8)}...`
  return str.length > num ? `${str.slice(0, num)}...` : str;
  // return str.length > num ? str.slice(num) : str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
