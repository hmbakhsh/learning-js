// also known as **iterators**

const groceries = ['milk', 'bread', 'eggs'];

// passing this function as an argument to the .forEach() method
// this is a callback function and the .forEach is a higher-order function(?)
const toList = (groceryItem) => {
  console.log(`[-] ${groceryItem}`);
}

// groceries.forEach(toList);

// what is an alternative way we can structure this?
groceries.forEach(function(groceryItem) {
  console.log(`[-] ${groceryItem}`)
})
