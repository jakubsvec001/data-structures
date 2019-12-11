var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {}
  this.lastIndex = -1
};


Queue.prototype.enqueue = function(value) {
  this.lastIndex++
  this.storage[this.lastIndex] = value;
  console.log(this.storage)
  },

Queue.prototype.dequeue = function() {
  var item = this.storage[0]
  delete this.storage[0]
  var obj = {}
  for (let key in this.storage){
    obj[+key - 1] = this.storage[key];
  }
  this.storage = obj
  this.lastIndex--;
  console.log(this.storage)
  return item
}

Queue.prototype.size = function() {
  console.log(this.storage)
  if (this.lastIndex < 0){
    return 0;
  }
  return this.lastIndex + 1
}

