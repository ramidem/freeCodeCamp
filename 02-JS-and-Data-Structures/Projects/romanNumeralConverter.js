function convertToRoman(num) {
  // RULES
  // max of 3
  // adding: same or smaller, on the right side
  // subtracting: smaller symbol, to the left to subtract

  let romans = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];
  let numerals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let romanNumeral = "";

  for (let i = 0; i < numerals.length; i++) {
    while (num >= numerals[i]) {
      romanNumeral += romans[i];
      num -= numerals[i];
    }
  }

  return romanNumeral;
}

convertToRoman(36);

console.log(convertToRoman(36));
console.log(convertToRoman(1));
console.log(convertToRoman(2));
console.log(convertToRoman(3));
console.log(convertToRoman(4));
console.log(convertToRoman(5));
console.log(convertToRoman(6));
console.log(convertToRoman(7));
console.log(convertToRoman(8));
console.log(convertToRoman(9));
console.log(convertToRoman(10));
