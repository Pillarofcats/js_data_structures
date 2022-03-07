//Stack - Linear Data Structure - FIFO(First In First Out)
class Queue {
  constructor(array = []) {
    this.list = array;
  }

  //Add element to end of list (top of queue)
  enqueque(element) {
    this.list.push(element);
  }

  //Remove element from beginning of list (bottom of queue)
  dequeue() {
    return (this.list.length == 0 ? "Empty Queue" : this.list.shift());
  }

  //Peek at the beginning of the list (bottom of queue)
  peek_start() {
    return (this.list.length == 0 ? "Empty Queue" : this.list[0]);
  }

  //Is the queue empty?
  isEmpty() {
    return (this.list.length == 0);
  }

  //Print the queue
  print() {
    let str = "";
    for(let element in this.list) {
      str += this.list[element] + " ";
    }
    return str;
  }

};

module.exports = { Queue };