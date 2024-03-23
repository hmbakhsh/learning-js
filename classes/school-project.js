class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  set setNumberOfStudents(newNumberOfStudents) {
    if (typeof newNumberOfStudents === "number") {
      this._numberOfStudents = newNumberOfStudents;
    } else {
      console.log(`Invalid input: numberOfStudents must be set to a Number.`);
    }
  }
  quickFacts() {
    console.log(
      `${this.name} educates ${this.numberOfStudents} at the ${this.level} school level.`,
    );
  }
  static pickSubstituteTeacher(substituteTeachers) {
    const randomNum = Math.floor(Math.random() * substituteTeachers.length - 1);
    return substituteTeachers[randomNum];
  }
}

class PrimarySchool extends School {
  constructor(name, level, numberOfStudents, pickupPolicy) {
    super(name, "primary", numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickUpPolicy() {
    return this._pickupPolicy;
  }
}

class HighSchool extends School {
  constructor(name, level, numberOfStudents) {
    super(name, "high", numberOfStudents);
    this._sportsTeam = [];
  }
  get sportsTeam() {
    return this._sportsTeam;
  }
}

const lorraineHansBury = new PrimarySchool(
  "Lorraine Hansbury",
  undefined,
  514,
  "Students must be picked up by a parent, guardian or a family member over the age of 13",
);

console.log(
  School.pickSubstituteTeacher([
    "Jamal Crawford",
    "Lou Williams",
    "J. R. Smith",
    "James Harden",
    "Jason Terry",
    "Manu Ginobli",
  ]),
);
