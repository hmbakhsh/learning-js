// Have the function ChangingSequence(arr) take the array of numbers stored in arr and
// return the index at which the numbers stop increasing and begin decreasing or stop decreasing
// and begin increasing. For example: if arr is [1, 2, 4, 6, 4, 3, 1] then your program should
// return 3 because 6 is the last point in the array where the numbers were increasing and the next number
// begins a decreasing sequence. The array will contain at least 3 numbers and it may contains only a single
// sequence, increasing or decreasing. If there is only a single sequence in the array, then your program should
// return -1. Indexing should begin with 0.

function ChangingSequence(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (
      (arr[i - 1] < arr[i] && arr[i + 1] < arr[i]) ||
      (arr[i - 1] > arr[i] && arr[i + 1] > arr[i])
    ) {
      return arr.indexOf(arr[i]);
    }
  }
  return -1;
}

let nums_one = [5, 4, 3, 2, 10, 11];
let nums_two = [1, 4, 18, 5, 2, -1];
console.log(ChangingSequence(nums_two));
