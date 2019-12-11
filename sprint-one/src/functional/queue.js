var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var lastIndex = -1

  someInstance.enqueue = function(value) {
    lastIndex++
    storage[lastIndex] = value;
  };

  someInstance.dequeue = function() {
    var item = storage[0]
    delete storage[0]
    var obj = {}
    for (let key in storage){
      obj[+key - 1] = storage[key];
    }
    storage = obj
    lastIndex--;
    return item
  };

  someInstance.size = function() {
    if (lastIndex < 0){
      return 0;
    }
    return lastIndex + 1
  };

  return someInstance;
};


