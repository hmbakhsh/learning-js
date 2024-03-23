const numbers = [1,2,3,4,5];

// map returns a new array after running the code in the callback function on each element in the array
// the aim of the code is to return a new array with the numbers multiplied by 5

const new_n = numbers.map(number => number*5); // implicit return
const new_n2 = numbers.map(number => { // explicit return
  return number*5;
})

// console.log(new_n)
// console.log(new_n2)

const new_n3 = number => {
	return number*5
}

console.log(numbers.map(new_n3))
