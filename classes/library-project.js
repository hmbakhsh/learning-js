// PROJECT NEXT STEPS
//  1) Add more properties to each class (movieCast, songTitles, etc.)
//  2) Create a CD class that extends Media.
//  3) In .addRating(), make sure input is between 1 and 5.
//  4) Create a method called shuffle for the CD class. The method returns a randomly sorted array of all the songs in the songs property.
//  5) Create class called Catalog that holds all of the Media items in our library.

class Media {
  constructor(title, isCheckedOut) {
    this._title = title;
    this._isCheckedOut = isCheckedOut;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
  set toggleCheckOutStatus(status) {
    this._isCheckedOut = status;
  }
  getAverageRating() {
    return (
      this.ratings.reduce((acc, cur) => {
        return acc + cur;
      }) / this.ratings.length
    );
  }
  addRating(rating) {
    this.ratings.push(rating);
  }
}

class Book extends Media {
  constructor(author, title, pages, isCheckedOut = false) {
    super(title, isCheckedOut);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runTime, isCheckedOut = false, ratings) {
    super(title, isCheckedOut, ratings);
    this._director = director;
    this._runTime = runTime;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}

const historyOfEverything = new Book(
  "Bill Bryson",
  "A Short History of Nearly Everything",
  544,
);
historyOfEverything.toggleCheckOutStatus = true;
console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie("Jan de Bont", "Speed", 116);
speed.toggleCheckOutStatus = true;
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
