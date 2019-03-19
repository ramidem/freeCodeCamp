/**
 * The DNA strand is missing the pairing element.
 * take each character, get its pair, and return the results as a 2D array
 *
 * Base Pairs are a pair of AT and CG.
 * input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
 */

function pairElement(str) {
  let dna = str.split("");
  let basePairs = [];

  for (let i = 0; i < dna.length; i++) {
    let strand = "";

    switch (dna[i].toLowerCase()) {
      case "a":
        strand = "AT";
        break;
      case "c":
        strand = "CG";
        break;
      case "g":
        strand = "GC";
        break;
      case "t":
        strand = "TA";
        break;
    }

    basePairs.push(strand.split(""));
  }

  return basePairs;
}

console.log(pairElement("GCG"));
console.log(pairElement("ATCGA"));
