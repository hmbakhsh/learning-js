// class bankAccount {
//   constructor(firstName, lastName, age) {
//     this._firstName = firstName;
//     this._lastName = lastName;
//     this._age = age;
//   }
//   get fullName() {
//     return `${this._firstName} ${this._lastName}`;
//   }
// }

// const hbakhsh = new bankAccount("haroon", "bakhsh", 21);
// console.log(hbakhsh.fullName);

// class User {
//   constructor(userName, password, gender, country) {
//     this._userName = userName;
//     this._password = password;
//     this._gender = gender;
//     this._country = country;
//   }
//   get userName() {
//     return this._userName;
//   }
//   get password() {
//     return this._password;
//   }
//   get gender() {
//     return this._gender;
//   }
//   get country() {
//     return this._country;
//   }
//   changePassword(newPassword) {
//     this._password = newPassword;
//   }
// }

// class Admin extends User {
//   constructor(userName, password, gender, country, module) {
//     super(userName, password, gender, country);
//     this._module = module;
//   }
//   get module() {
//     return this._module;
//   }
// }

// const haroon = new Admin("hbak", "123", "male", "england", "Admin Dashboard");
// console.log(haroon.password);

// const randomNumber = Math.floor(Math.random() * 10000);
// console.log(randomNumber);
