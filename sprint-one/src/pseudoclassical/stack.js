var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {}
};

Stack.prototype.push = function(value) {
  var keys = Object.keys(this.storage)
  if (keys.length === 0 ){
    this.storage[0] = value;
  } else {
    this.storage[Math.max(...keys) + 1] = value
  }
};

Stack.prototype.pop = function() {
  var keys = Object.keys(this.storage);
  var last = Math.max(...keys);
  var item = this.storage[last]
  delete this.storage[last];
  return item;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length
};


