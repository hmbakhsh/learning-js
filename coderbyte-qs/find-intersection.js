// MISREAD THE QUESTION AND THOUGHT I WAS ITERATING OVER ARRAYS..
// function FindIntersection(strArr) {
//   let resArray = [];
//   for (let i = 0; i < strArr[0].length; i++) {
//     strArr[1].forEach(function (item) {
//       if (item === strArr[0][i]) {
//         resArray.push(item);
//       }
//     });
//   }
//   if (resArray.length) {
//     return resArray;
//   } else {
//     return false;
//   }
// }

// const input = [
//   [1, 3, 4, 7, 13],
//   [1, 2, 4, 13, 15],
// ];
// console.log(FindIntersection(input)); // Output: 1,4,13

function FindIntersection(strArr) {
  const strArr1 = strArr[0].split(", ");
  const strArr2 = strArr[1].split(", ");
  let resultArr = [];

  for (let i = 0; i < strArr1.length; i++) {
    for (let j = 0; j < strArr2.length; j++) {
      if (strArr1[i] === strArr2[j]) {
        resultArr.push(strArr1[i]);
      }
    }
  }
  return resultArr.join(", ");
}

const input = ["7", "1, 2, 4, 13, 15"];
console.log(FindIntersection(input)); // Output: 1,4,13

function FindIntersection2(strArr) {
  const strArr1 = strArr[0].split(", ");
  const strArr2 = strArr[1].split(", ");

  let resultArr = strArr1.filter((x) => strArr2.find((b) => b === x));
  return resultArr ? resultArr.join(", ") : false;
}

console.log(FindIntersection2(input)); // Output: 1,4,13

function findIntersection3(strArr) {
  const strArr1 = strArr[0].split(", ");
  const strArr2 = strArr[1].split(", ");
  let resultArr = [];

  strArr1.forEach((e) => {
    if (strArr2.includes(e)) {
      resultArr.push(e);
    }
  });

  return resultArr.length ? resultArr.join(", ") : false;
}

console.log(findIntersection3(input)); // Output: 1,4,13
