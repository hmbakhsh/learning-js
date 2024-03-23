class bankAccount {
  constructor(firstName, lastName, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
    this._balance = 0;
    this._transactions = [];
  }
  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }
  get balance() {}
  withdraw(num) {
    this._transactions.push(num);
  }
  deposit(num) {
    this._transactions.push(num);
  }
}

class childBankAccount extends bankAccount {
  constructor(firstName, lastName, age) {
    super(firstName, lastName, age);
  }
}

const hbak = new bankAccount("haroon", "bakhsh", 21);
console.log(hbak.fullName);

hbak.deposit(40);
console.log(hbak._transactions);

const ibak = new childBankAccount("iman", "bakhsh", 17);
console.log(ibak.fullName);
