function OneDecremented(str) {
  counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] - 1 == str[i + 1]) {
      counter += 1;
    }
  }
  return counter;
}

console.log(OneDecremented("3200"));
