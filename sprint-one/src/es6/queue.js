class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {}
    this.lastIndex = -1
  }

  enqueue(value) {
    this.lastIndex++
    this.storage[this.lastIndex] = value;
    }

  dequeue(){
    var item = this.storage[0]
    delete this.storage[0]
    var obj = {}
    for (let key in this.storage){
      obj[+key - 1] = this.storage[key];
    }
    this.storage = obj
    this.lastIndex--;
    return item
  }

  size(){
    if (this.lastIndex < 0){
      return 0;
    }
    return this.lastIndex + 1
  }
}


