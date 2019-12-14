var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {}
  someInstance.lastIndex = -1;
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.lastIndex++
    this.storage[this.lastIndex] = value;
  },

  dequeue: function() {
    var item = this.storage[0]
    delete this.storage[0]
    var obj = {}
    for (let key in this.storage){
      obj[+key - 1] = this.storage[key];
    }
    this.storage = obj
    this.lastIndex--;
    return item
  },

  size: function() {
    if (this.lastIndex < 0){
      return 0;
    }
    return this.lastIndex + 1
  },
};

