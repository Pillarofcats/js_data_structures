//Stack - Linear Data Structure - LIFO(Last In First Out)
class Stack {
  //Array/List is used to implement stack
  constructor(array = []) {
    this.list = array;
  }

  //Add element to end of list (top of stack)
  push(element) {
    this.list.push(element);
  }

  //Remove element from end of list (top of stack)
  pop() {
    if(this.list.length == 0) {
      return "Empty Stack";
    }
    return (this.list.length == 0 ? "Empty stack" : this.list.pop());
  }

  //Return the element from end of list (top of stack)
  peek_end() {
    return (this.list.length == 0 ? "Empty stack" : this.list[this.list.length-1]);
  }

  //Return boolean (T/F) if stack is empty
  isEmpty() {
    return (this.list.length == 0);
  }

  //Print the stack
  print() {
    let str = "";
    for(let element in this.list) {
      str += this.list[element] + " ";
    }
    return str;
  }
};

module.exports = { Stack };