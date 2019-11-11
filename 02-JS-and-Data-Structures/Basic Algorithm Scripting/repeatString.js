function repeatStringNumTimes(str, num) {
  // repeat after me
  let newStr = "";
  while (0 < num) {
    newStr += str;
    num--;
  }
  return newStr;
}

console.log(repeatStringNumTimes("abc", 3));
