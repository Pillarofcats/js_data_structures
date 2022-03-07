const { DoubleLinkedList } = require("./double_linked_list.js");

//Create a new DLL object
let dll = new DoubleLinkedList();

//Print DLL
console.log("Print DLL:");
console.log(dll);

//Add values to DLL
console.log("\nAdd a node to double linked list:");
dll.add_end(1);
console.log(dll.print());

console.log("\nAdd another node to double linked list:");
dll.add_end(2);
console.log(dll.print());

console.log("\nAdd another node to double linked list:");
dll.add_end(3);
console.log(dll.print());

console.log("\nAdd another node to the beginning:");
dll.add_beginning(4);
console.log(dll.print());

//Insert node at given (value,index)
console.log("\nInsert node at the beginning with index 0:");
dll.insertAt(5,0);
console.log(dll.print());

console.log("\nInsert node at the end with index 4:");
dll.insertAt(6,4);
console.log(dll.print());

console.log("\nInsert node at the end with index 6, which is greater than the size of the double linked list, so the node will not be added:");
console.log(dll.insertAt(7,6));
console.log(dll.print());

//Get first node in DLL
console.log("\nGet first node data:");
console.log(dll.getFirst());

//Get last node in DLL
console.log("\nGet last node data:");
console.log(dll.getLast());

//Remove node at given (index) 
console.log("\nRemove node at index 0:");
dll.removeAt(0);
console.log(dll.print());

console.log("\nRemove node at index 4:");
dll.removeAt(4);
console.log(dll.print());

//Get size of DLL
console.log("\nGet node size:");
console.log(dll.getSize());
console.log(dll.print());

//Get index of node given (node value)
console.log("\nSearch for node data value of 6 and return its index:");
console.log(dll.indexOf(6));
console.log(dll.print());

//Failed attempt to search by index
console.log("\nSearch for node data value of -2 and return its index (-2 doesn't exist, returns -1):");
console.log(dll.indexOf(-2));
console.log(dll.print());

//Remove node at given (index)
console.log("\nRemove node at index 2:");
dll.removeAt(2);
console.log(dll.print());

console.log("\nRemove node at index 1:");
dll.removeAt(1);
console.log(dll.print());

//Clear DLL
console.log("\nClear double linked list:");
dll.clear();
console.log(dll);

//Add node to DLL at beginning
console.log("\nAdd a node to the beginning with double linked list empty:");
dll.add_beginning(2);
console.log(dll.print());

console.log("\nAdd another node to the beginning with double linked list empty:");
dll.add_beginning(1);
console.log(dll.print());

console.log("\nAdd another node to the beginning with double linked list empty:");
dll.add_beginning(2);
console.log(dll.print());

console.log("\nAdd another node to the beginning with double linked list empty:");
dll.add_beginning(2);
console.log(dll.print());

//Remove all nodes given (node value)
console.log("\nRemove all nodes with a data of 2:");
dll.removeElements(2);
console.log(dll.print());

//Print DLL
console.log(dll);

