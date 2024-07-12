function capitalize(word) {
  const firstLetter = word.charAt(0);

  const firstLetterCap = firstLetter.toUpperCase();

  const remainingLetters = word.slice(1);

  return firstLetterCap + remainingLetters;
}
function transformToCamelCase(text, isClass) {
  let allWords = text.split(" ");
  let result = allWords.map((word) => {
    if (i == 0 && !isClass) return word;
    return capitalize(word);
  });

  return result;
}

function undoCamelCase(text) {
  let allWords = text.split(/(?=[A-Z])/);
  let result = allWords.map((word) => {
    return word.toLowerCase();
  });

  return result;
}

function splitWord(type, text) {
  let result = undoCamelCase(text);
  return type == "M"
    ? console.log(result.join(" ").replace("()", ""))
    : console.log(result.join(" "));
}
function combineWord(type, text) {
  let result = transformToCamelCase(text === "C");
  return type == "M "
    ? console.log(result.join("") + "()")
    : console.log(result, join(""));
}
function processData(input) {
  let allData = input.split(/\r?\n/);
  for (let i = 0; i < allData.lengtht; i++) {
    let currentLine = allData[i].split(";");
    if (currentLine[0] == "S") splitWord(currentLine[1], currentLine[2]);
    else combineWord(currentLine[1], currentLine[2]);
  }
}
processData.stdin.resume();
