function VowelCount(str) {
  let counter = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      counter += 1;
    }
  }
  return counter;
}

console.log(VowelCount("coderbyte"));
