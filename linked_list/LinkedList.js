class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

//Export class LinkedList for ES6 export
class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.size = this.initSize();
  }

  //ADD ELEMENT TO END OF LIST
  add(data) {
    //Create new Node
    let new_node = new Node(data);
    //Current node
    let current;

    //If LL is empty, add element
    if(this.head == null) {
      this.head = new_node;
    } else {
      current = this.head;
      //Iterate to end of list
      while(current.next) {
        current = current.next;
      }
      //At end of list current.next is null, so add node
      current.next = new_node;
    }
    //Increment size of list by 1
    this.size++;
  }

  insertAt(data, index) {
    if(index < 0 || index >= this.size) {
      return "Index value invalid";
    } 
    else {
      let current = this.head;
      let previous;
      let new_node = new Node(data);
      //Index = 0
      if(index == 0 && this.head == null) {
        this.head = new_node;
      }
      else if(index == 0) {
        new_node.next = this.head;
        this.head = new_node;
      }
      else {
        //start at head of linked list
        current = this.head; 
        let iteration = 0;
        //Iterate list to index, stop at index right before desired index
        while(iteration < index) {
          previous = current;
          current = current.next;
          iteration++;
        }
        //Add the element
        new_node.next = current;
        previous.next = new_node;
      }
      //Increment size
      this.size++;
    }
  }

  //Remove element at index
  removeAt(index) {
    if(index < 0 || index >= this.size) {
      return "Index value invalid";
    } else {
      let current, previous, iteration = 0;
      current = this.head;
      previous = current;

      //Delete first element
      if(index == 0) {
        this.head = current.next;
      } else {
        //Iterate over list to desired index and remove element
        while(iteration < index) {
          iteration++;
          previous = current;
          current = current.next;
        }
        //Remove element
        previous.next = current.next;
      }
      //Decrement size
      this.size--;
      //Return removed element
      return current.element;
    }
  }

  //Remove element from list with matching element
  removeElement(data) {
    let current = this.head;
    let previous = null;

    //Iterate over list comparing elements
    while(current !== null) {
      if(current.data === data) {
        if(previous == null) {
          this.head = current.next;
        } else {
            previous.next = current.next;
        }
        this.size--;
        return current.data;
      }
      previous = current;
      current = current.next;
    }
    return -1;
  }

  //Get index of an element
  indexOf(data) {
    let count = 0;
    let current = this.head;
    //Iterate over list, compare elements
    while(current != null) {
      if(current.data === data) {
        return count;
      }
      count++;
      current = current.next;
    }
    //Not found
    return -1;
  }

  //Check if empty
  isEmpty() {
    return this.size == 0;
  }

  //Get size of linked list
  getSize() {
    return this.size;
  }

  //Set initial size of linked list
  initSize() {
    let count = 0;
    let current = this.head;
    while(current !== null) {
      count++;
      current = current.next;
    }
    return count;
  }

  //Print linked list
  printList() {
    if(this.head == null) {
      return "Empty linked list";
    } else {
      let current = this.head;
      let str = "";
      while(current !== null) {
        str += `{${current.data}} `;
        current = current.next;
      }
      return str;
    }
  }

  //Get last element in linked list
  getLast() {
    if(this.head == null) {
      return "Empty linked list";
    } else {
      let current = this.head;
      while(current.next) {
      current = current.next;
    }
    return current.data;
    }
  }

  //Get first element in linked list
  getFirst() {
    if(this.head == null) {
      return "Empty linked list";
    } else {
      return this.head.data;
    }
  }

  //Clear linked list
  clear() {
    this.head = null;
    this.size = 0;
    return "Cleared linked list";
  }

  //Add multiple elements to a linked list
  addMore(...args) {
    args.forEach((data) => {
      this.add(data);
    });
  }
}

module.exports = { LinkedList, Node }; //NODE