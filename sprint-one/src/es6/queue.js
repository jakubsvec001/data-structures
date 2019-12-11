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
    console.log(this.storage)
    }

  dequeue(){
    var item = this.storage[0]
    delete this.storage[0]
    var obj = {}
    console.log(this.storage)
    for (let key in this.storage){
      obj[+key - 1] = this.storage[key];
    }
    this.storage = obj
    this.lastIndex--;
    console.log(this.storage)
    return item
  }

  size(){
    console.log(this.storage)
    if (this.lastIndex < 0){
      return 0;
    }
    return this.lastIndex + 1
  }
}


var queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
console.log(queue.size())
queue.enqueue(3)
console.log(queue.size())
queue.dequeue()
console.log(queue.size())
