//Import { LinkedList } from "./LinkedList.js"; //ES6

const { LinkedList } = require("./LinkedList.js"); //NODE
const { lReverseI } = require("./ReverseLinkedListIterative.js");

console.log("hello world");

//Create linked list
let ll = new LinkedList();
  
//Testing isEmpty on an empty list
//Returns true
console.log("List empty?");
console.log(ll.isEmpty());

//Get first node
console.log("Get first node:");
console.log(ll.getFirst());

//Get last node
console.log("Get last node:");
console.log(ll.getLast());

//Adding element to the list
console.log("Added 1:");
ll.add(1);
  
//Prints 1
console.log(ll.printList());

//Get first node
console.log("Get first node:");
console.log(ll.getFirst());

//Get last node
console.log("Get last node:");
console.log(ll.getLast());

//Returns 1
console.log("List size:");
console.log(ll.getSize());
  
//Adding more elements to the list
console.log("Added 2:");
ll.add(2);
console.log("Added 3:");
ll.add(3);
console.log("Added 4:");
ll.add(4);
console.log("Added 5:");
ll.add(5);
  
//Returns 1 2 3 4 5
console.log(ll.printList());
  
//Prints 5 from the list
console.log("Remove 5:");
console.log(ll.removeElement(5));
  
//Prints 1 2 3 4
console.log(ll.printList());
  
//Returns 3
console.log("Get index of 4:"); 
console.log(ll.indexOf(4));
  
//Insert 6 at second position
//LL contains 1 2 6 3 4
console.log("Insert 6 at index 2:");
ll.insertAt(6, 2);
  
console.log(ll.printList());
  
//Returns false
console.log("List empty?");
console.log(ll.isEmpty());
  
//Remove 3rd element from the list
console.log("Remove element at index 3:"); 
console.log(ll.removeAt(3));
  
//Prints 1 2 6 4
console.log(ll.printList());

//Add many nodes
ll.addMore(5,7,8);

//Prints 1 2 6 4 5 7 8
console.log(ll.printList());

//Get first node
console.log("Get first node:");
console.log(ll.getFirst());

//Get last node
console.log("Get last node:");
console.log(ll.getLast());

//Let rll = Object.assign(Object.create(Object.getPrototypeOf(ll)), ll); //Sudo deep copy
//rll.lReverse();

//Print reversed linked list (iteratively)
console.log("Reverse linked list (Iteratively):");
//lReverseI(tempLL); //Pass LinkedList
ll = lReverseI(ll);
console.log(ll.printList());

//Print reversed linked list (iteratively)
console.log("Reverse linked list (Iteratively), again:");
ll = lReverseI(ll);
console.log(ll.printList());

//Clear linked list
console.log("Clear linked list:");
console.log(ll.clear());

//Print linked list (empty)
console.log(ll.printList());