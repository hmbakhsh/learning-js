function removeBrackets(str) {
  arr = str.split("");
  let counterLeft = 0;
  let counterRight = 0;

  arr.forEach((e) => {
    if (e === "(") {
      counterLeft++;
    } else {
      counterRight++;
    }
  });

  return Math.abs(counterLeft - counterRight);
}

console.log(removeBrackets("(())()((("));

function removeBrackets2(str) {
  while (str.includes("()")) {
    str = str.replace("()", "");
  }
  return str.length;
}

console.log(removeBrackets2("(())()((("));
