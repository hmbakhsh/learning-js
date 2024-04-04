// function makeUser(name, age) {
//   return {
//     _name: name,
//     _age: age,
//     get usersName() {
//       return `username: ${this._name}`;
//     },
//     loanEligiblity() {
//       return this._name.length > 5 && age > 18 ? true : false;
//     },
//   };
// }

// const hbak = makeUser("haroon", 21);
// console.log(hbak.loanEligiblity());

// const { usersName } = hbak;
// console.log(usersName);

class User {
  constructor(name, age, height) {
    this.name = name;
    this.age = age;
    this._height = height;
  }
  get height() {
    return `height: ${this._height}cm`;
  }
}

const hbak = new User("haroon", 21, 170);
console.log(hbak.height);
