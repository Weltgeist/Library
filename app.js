class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title(){
    return this._title;
  }
  get isCheckedOut(){
    return this._isCheckedOut;
  }
  get ratings(){
    return this._ratings;
  }
  set isCheckedOut(isCheckedOut){
    this._isCheckedOut = isCheckedOut;

  }
  toggleCheckOutStatus(){
    this.isCheckedOut = !this.isCheckedOut;
  }
  getAverageRating(){
    return (this.ratings.reduce((acc,curr) => acc + curr, 0))/this.ratings.length;
  }


  
  
}
