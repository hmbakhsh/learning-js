function SimpleEvens(num) {
  numStr = num.toString();
  results = [];
  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] % 2 != 0) {
      return "false";
    }
  }
  return "true";
}

console.log(SimpleEvens(20864646422));
