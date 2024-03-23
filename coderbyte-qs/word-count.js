function WordCount(str) {
  let counter = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      counter += 1;
    }
  }
  if (str.length == 0) {
    return 0;
  } else {
    return counter;
  }
}

let testString = "Hi";
console.log(WordCount(testString));
