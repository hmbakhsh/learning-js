// Distinct Characters

function DistinctCharacters(str) {
  let arr = str.split("");
  let set = Array.from(new Set(arr));
  return set.length >= 10 ? true : false;
}

console.log(DistinctCharacters("12334bbmma:=6"));
