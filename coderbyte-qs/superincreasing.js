// function Superincreasing(arr) {
//   const arrCheck = arr.reduce(function (acc, cur) {
//     if (cur < acc) {
//       return false;
//     } else {
//       return cur + acc;
//     }
//   });
//   if (arrCheck === false) {
//     return false;
//   } else {
//     return true;
//   }
// }

// console.log(Superincreasing([1, 2, 5, 10]));
// console.log(Superincreasing([1, 2, 3, 4]));

function Superincreasing(arr) {
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < sum) {
      return false;
    }
    sum += arr[i];
  }
  return true;
}

nums = [1, 2, 4, 10];
console.log(Superincreasing(nums));
