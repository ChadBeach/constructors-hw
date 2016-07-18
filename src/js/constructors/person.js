function Human () {
  var options = options || {};
  this.cool = true
  this.feed = function (animal){
    animal.hungry = false
  }
  this.pet = function (animal) {
    // console.log(animal);
    animal.status = "happy";
    if (options.cool === undefined) {
      this.cool = false
    }else{
      this.cool = true
    }
  };
};

// var addOne = function (x) { return x + 1; };

export {Human};
