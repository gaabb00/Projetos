function processData(input) {
  input = input.split(";");

  const operation = input[0];
  let shapes = input[1];
  let words = input[2];

  if (operation == "S" && shapes == "V") {
    const result = splitmethod(words);
    console.log(result);
  }

  if (operation == "C" && shapes == "V") {
    const result = combine(words);
    console.log(result);
  }
  if (operation == "C" && shapes == "C") {
    const result = variableCombine(words);
    console.log(result);
  }
  if (operation == "S" && shapes == "C") {
    const result = splitClass(words);
    console.log(result);
  }
  if (operation == "S" && shapes == "M") {
    const result = splitRemove(words);
    console.log(result);
  }
  if (operation == "C" && shapes == "M") {
    const result = addeMethod(words);
    console.log(result);
  }
}

function splitmethod(words) {
  let splits = words.split(/(?=[A-Z])/).map((words) => words.toLowerCase());
  return splits.join(" ");
}
function combine(words) {
  words = words.split(" ").map((words, index) => {
    if (index === 0) {
      return words[0].toLowerCase() + words.slice(1).toLowerCase();
    } else {
      return words[0].toUpperCase() + words.slice(1).toLowerCase();
    }
  });
  return words.join("");
}

function variableCombine(words) {
  let combine = words
    .split(" ")
    .map((words) => words[0].toUpperCase() + words.substring(1).toLowerCase());
  return combine.join("");
}
function splitClass(words) {
  let splits = words.split(/(?=[A-Z])/).map((words) => words.toLowerCase());
  return splits.join(" ");
}
function splitRemove(words) {
  if (words.endsWith("()")) {
    // Remove os dois últimos parênteses de fechamento
    words = words.slice(0, -2);
  }
  let splits = words.split(/(?=[A-Z])/).map((word) => word.toLowerCase());
  return splits.join(" ");
}
function addeMethod(words) {
  words = words.split(" ").map((words, index) => {
    if (index === 0) {
      return words[0].toLowerCase() + words.slice(1).toLowerCase();
    } else {
      return words[0].toUpperCase() + words.slice(1).toLowerCase();
    }
  });
  let formattedString = words.join("");
  return `${formattedString}()`;
}

processData("S;M;plasticCup()");
processData("C;V;mobile phone");
processData("C;C;coffee machine");
processData("S;C;LargeSoftwareBook");
processData("C;M;white sheet of paper");
processData("S;V;pictureFrame");
