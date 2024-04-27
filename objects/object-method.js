function newUser(name, age) {
  return {
    name,
    age,
    getName() {
      this.name = this.name;
      return this;
    },
    getFirstChar() {
      this.name = this.name[0];
      return this.name;
    },
  };
}

let hbak = newUser("haroon", 21);
console.log(hbak.getName().getFirstChar());
