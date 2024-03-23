function DashInsert(str) {
  newStr = "";
  for (let i = 0; i < str.length; i++) {
    let j = i + 1;
    if (str[i] % 2 !== 0 && str[j] % 2 !== 0) {
      newStr += `${str[i]}-`;
    } else {
      newStr += `${str[i]}`;
    }
  }
  return newStr;
}

console.log(DashInsert("273644"));
