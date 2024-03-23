// Higher Order Function - Testing
function generateName() {
  nameList = ['Jon', 'Haroon', 'Adam', 'Ivan', 'Jake']
  let randomNum = Math.floor(Math.random()*5);
  return nameList[randomNum];
}

function inviteFriend(func) { // func isn't a very descriptive parameter!
  let friend = func();
  return `hey, wanna come over ${friend}?`
}

console.log(inviteFriend(generateName));


// function sayHelloAndGreetPerson(name) {
// 	return `hey ${name}, so nice to see you!`
// }

// const greetFriend = sayHelloAndGreetPerson;
// console.log(greetFriend('haroon'));
