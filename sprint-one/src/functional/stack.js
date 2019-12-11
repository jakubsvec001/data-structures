var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var keys = Object.keys(storage)
    if (keys.length === 0 ){
      storage[0] = value;
    } else {
      storage[Math.max(...keys) + 1] = value
    }
  };

  someInstance.pop = function() {
    var keys = Object.keys(storage);
    var last = Math.max(...keys);
    var item = storage[last]
    delete storage[last];
    return item;
  };

  someInstance.size = function() {
    return Object.keys(storage).length
  };

  return someInstance;
};
