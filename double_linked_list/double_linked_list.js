//Node class to hold data and pointers prev/next node
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.previous = null;
  }
};

//Double linked list class with helper methods
class DoubleLinkedList {
  //Initial object state on creation
  constructor(head = null) {
    this.head = head;
    this.size = this.initSize();
  }

  //Add node to end of DLL
  add_end(data) {
    let new_node = new Node(data);
    let current = this.head;
    
    if(this.head == null) {
      this.head = new_node;
    }
    else {
      while(current.next) {
        current = current.next;
      }
      current.next = new_node;
      new_node.previous = current;
    }
    this.size++;
  }

  //Add node to beginning of DLL
  add_beginning(data) {
    let new_node = new Node(data);
    let current = this.head;

    if(this.head == null) {
      this.head = new_node;
    }
    else {
      new_node.next = current;
      new_node.previous = null;
      current.previous = new_node;
      this.head = new_node;
    }
    this.size++;
  }

  //Inset node at (data, index) in DLL
  insertAt(data, index) {
    if(index < 0 || index >= this.size) {
      return "Index value invalid";
    }
    else {
      let current = this.head;
      let previous;
      let new_node = new Node(data);

      if(index == 0 && this.head == null) {
        this.head = new_node;
      }
      else if(index == 0) {
        new_node.next = current;
        new_node.previous = null;
        current.previous = new_node;
        this.head = new_node;
      }
      else {
        let iteration = 0;
        //Stop at node just before desired index, previous node is the insertion point
        while(iteration < index) {
          previous = current;
          current = current.next;
          iteration++;
        }
        new_node.next = current;
        new_node.previous = previous;
        current.previous = new_node;
        previous.next = new_node;
      }
      this.size++;
    }
  }

  //Return size of DLL
  getSize() {
    return this.size;
  }

  //Return boolean if DLL is empty
  isEmpty() {
    return this.size == 0;
  }

  //Initial size for DLL constructor
  initSize() {
    let count = 0;
    let current = this.head;
    while(current !== null) {
      count++;
      current = current.next;
    }
    return count;
  }

  //Remove all nodes that share a (node value)
  removeElements(data) {
    let current = this.head;
    let previous;
    let next = current.next;

    //Double linked list is empty
    if(this.head === null) {
      return "Empty double linked list";
    }

    let iteration = 0;
    //Loop through each node deleting all nodes that share the same value
    while(current) {
      next = current.next;
      //One node present in double linked list
      if(current.data === data && this.size === 1) {
        console.log("B");
        this.head = null;
        iteration--;
        this.size--;
      }
      //First node
      else if(current.data === data && iteration === 0) {
        next.previous = null;
        this.head = next;
        iteration--;
        this.size--;
      }

      //All Nodes except last node
      else if(current.data === data && next !== null) {
        previous.next = next;
        next.previous = previous;
        current = previous;
        next = current.next;

        iteration --;
        this.size--;
      }

      //Last node
      else if(current.data === data && current.next === null) {
        previous.next = null;
        current = previous;
        iteration--;
        this.size--;
      }

      previous = current;
      current = current.next;
      iteration++;
    }
  }

  //Get index of node at give (node value)
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

  //Print DLL
  print() {
    if(this.head == null) {
      return "Empty double linked list";
    } else {
      let str = "";
      let current = this.head;

      while(current) {
        str += `{previous: ${current.previous}, data: ${current.data}, next: ${current.next}} `;
        current = current.next;
      }
      return str;
    }
  }

  //Clear the DLL
  clear() {
    this.head = null;
    this.size = 0;
    return "Cleared double linked list";
  }

  //Remove a node at given (index)
  removeAt(index) {
    if(index < 0 || index >= this.size) {
      return "Index value invalid";
    }
    else {
      let previous;
      let current = this.head;
      let next = current.next;
      let iteration = 0;

      if(this.head == null) {
        return "Empty double linked list";
      }
      else if(index == 0) {
        next.previous = null;
        this.head = next;
      }
      else if(index == this.size-1) {
        while(current.next) {
          previous = current;
          current = current.next;
        }
        previous.next = null;
      }
      else {
        //Index-1 since we have a next, and we need the next and previous to link them
        while(iteration <= index-1) {
          previous = current;
          current = next;
          next = current.next;
          iteration++;
        }
        previous.next = next;
        next.previous = previous;
      }
    }
    this.size--;
  }

  //Get first node in DLL
  getFirst() {
    if(this.head == null) {
      return "Empty double linked list";
    } 
    else {
      return this.head.data;
    }
  }
  
  //Get last node in DLL
  getLast() {
    if(this.head == null) {
      return "Empty double linked list";
    } 
    else {
      let current = this.head;
      while(current.next) {
        current = current.next;
      }
      return current.data;
    }
  }
};

module.exports = { Node, DoubleLinkedList };