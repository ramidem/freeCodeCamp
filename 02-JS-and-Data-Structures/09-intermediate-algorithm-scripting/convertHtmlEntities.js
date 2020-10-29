function convertHTML(str) {
  // &colon;&rpar;
  let re = /&|<|>|'|"/;
  let sentence = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i].match(re)) {
      switch (str[i]) {
        case "&":
          sentence.push("&amp;");
          break;
        case "<":
          sentence.push("&lt;");
          break;
        case ">":
          sentence.push("&gt;");
          break;
        case "'":
          sentence.push("&apos;");
          break;
        case '"':
          sentence.push("&quot;");
          break;
      }
    } else {
      sentence.push(str[i]);
    }
  }
  return sentence.join("");
}

console.log(convertHTML("Dolce & <>Gabbana; \"''"));
