function BitwiseOne(strArr) {
  let outputStr = "";
  for (let i = 0; i < strArr[0].length; i++) {
    if (strArr[0][i] == "0" && strArr[1][i] == "0") {
      outputStr += "0";
    } else {
      outputStr += "1";
    }
  }
  return outputStr;
}

const inputArr = ["00011", "01010"];
console.log(BitwiseOne(inputArr));
