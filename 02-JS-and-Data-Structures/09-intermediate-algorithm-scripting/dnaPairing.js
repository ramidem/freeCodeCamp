function pairElement(str) {
  let strands = str.split("");
  let pairs = [];

  for (let i = 0; i < strands.length; i++) {
    let pair = [];

    switch (strands[i]) {
      case "G":
        pair.push("G", "C");
        break;
      case "C":
        pair.push("C", "G");
        break;
      case "A":
        pair.push("A", "T");
        break;
      case "T":
        pair.push("T", "A");
        break;
    }

    pairs.push(pair);
  }

  return pairs;
}

console.log(pairElement("GCG"));
console.log(pairElement("ATCG"));
