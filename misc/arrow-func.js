// 1) implicit return arrow function syntax

//  a) single param
const sayName = name => console.log(name);

//  b) double param
const sayName2 = (name, age) => console.log(`${name}, ${age}`);

// 2) explicit return arrow function synax
const sayName3 = name => {
  console.log(name);
}

console.log(sayName3('haroon'));
