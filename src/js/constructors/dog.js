function Dog (options) {
  var options = options || {};
  this.status = "normal";
  this.color = "black";
  this.hungry = options.hungry;
  if (options.hungry === undefined) {
    this.hungry = true
  }else{
    this.hungry = false
  }
};

export { Dog }
