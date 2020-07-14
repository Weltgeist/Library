class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
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
  set isCheckedOut(isCheckedOut) {
    this._isCheckedOut = isCheckedOut;

  }
  toggleCheckOutStatus() {
    this.isCheckedOut = !this.isCheckedOut;
  }
  getAverageRating() {
    return (this.ratings.reduce((acc, curr) => acc + curr, 0)) / this.ratings.length;
  }
  addRating(rating) {
    this.ratings.push(rating);
  }



}

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
  set author(author) {
    this._author = author;
  }
  set pages(pages) {
    this._pages = pages;
  }

}

class Movie extends Media {
  constructor(title, director, runtime) {
    super(title);
    this._director = director;
    this._runtime = runtime;
  }
  get director() {
    return this._director;
  }
  get runtime() {
    return this._runtime;
  }
  set director(director) {
    this._director = director;
  }
  set runtime(runtime) {
    this._runtime = runtime;
  }

}