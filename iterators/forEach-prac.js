const groceries = ['eggs', 'milk', 'bread'];
// groceries.forEach(item => console.log(`- ${item}`))

const itemList = item => console.log(`- ${item}`); // implicit return
groceries.forEach(itemList);
