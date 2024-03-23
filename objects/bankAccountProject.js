// pass by reference, looping (for in), this, privacy, getters setters, monster functions

// const person = (firstName, lastName, age) => {
//   return {
//     _firstName: firstName,
//     _lastName: lastName,
//     _age: age,
//     get fullName() {
//       return `${this._firstName} ${this._lastName}`;
//     },
//   }
// }

// const p1 = person('adam', 'king', 15);
// console.log(p1._firstName);

// for (key in p1) {
//   console.log(`${key}: ${p1[key]} `);
// }

const bankAccount = (firstName, lastName, age, startingBal) => {
  return {
    firstName: firstName,
    _lastName: lastName,
    address: {
      firstLine: "7 Sycamore Street",
      secondLine: "NW8 6PZ",
    },
    _age: age,
    _startingBal: startingBal,
    _balance: 0,
    _transactions: [],
    get fullName() {
      return `${this._firstName} ${this._lastName}`;
    },
    get balance() {
      const bal = this._transactions.reduce((cur, acc) => {
        return cur + acc;
      });
      return `Current Balance: $${bal}`;
    },
    set setBal(bal) {
      this._balance = bal;
    },
    get loanEligible() {
      if (age >= 18) {
        return true;
      } else {
        return false;
      }
    },
    deposit(bal) {
      if (bal > 0) {
        return this._transactions.push(bal);
      } else if (bal === 0) {
        console.log(`You cannot deposit $0. Please try again.`);
      } else {
        let absBal = Math.abs(bal);
        console.log(`You cannot deposit -$${absBal}. Please try again.`);
      }
    },
    withdraw(bal) {
      if (bal > 0) {
        return this._transactions.push(-bal);
      } else if (bal == 0) {
        console.log(`You cannot withdraw $0. Please try again.`);
      } else {
        let absBal = Math.abs(bal);
        console.log(`You cannot withdraw -$${absBal}. Please try again.`);
      }
    },
  };
};

const hbak = bankAccount("haroon", "bakhsh", 21, 10000);
hbak.deposit(1000);
