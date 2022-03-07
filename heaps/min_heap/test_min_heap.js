const minHeap = require("./min_heap.js");

//Instantiate new minHeap object
let mH = new minHeap;

//Add some elements
console.log("Added: ", mH.insertElement(19));
console.log("Added: ", mH.insertElement(2));
console.log("Added: ", mH.insertElement(5));
console.log("Added: ", mH.insertElement(7));
console.log("Added: ", mH.insertElement(3));
console.log("Added: ", mH.insertElement(9));
console.log("Added: ", mH.insertElement(15));
console.log("Added: ", mH.insertElement(9));
console.log("Added: ", mH.insertElement(10));
console.log("Added: ", mH.insertElement(1));
console.log("Added: ", mH.insertElement(12));
console.log("Added: ", mH.insertElement(8));


//Print the heap tree
mH.printHeapTree();

//Extract minimum element
console.log("Extracted minimum element: ", mH.extractMinElement());

//Print the heap tree
mH.printHeapTree();

//Extract minimum element
console.log("Extracted minimum element: ", mH.extractMinElement());

//Print the heap tree
mH.printHeapTree();

//Extract minimum element
console.log("Extracted minimum element: ", mH.extractMinElement());

//Print the heap tree
mH.printHeapTree();

//Extract minimum element
console.log("Extracted minimum element: ", mH.extractMinElement());

//Print the heap tree
mH.printHeapTree();

//Extract minimum element
console.log("Extracted minimum element: ", mH.extractMinElement());

//Print the heap tree
mH.printHeapTree();

//Heap size
console.log("True heap size with a starting index of 1: ", mH.getHeapSize());

//Get minimum element
console.log("Get minimum element: ", mH.getMinimum());

//Check if leaf element
console.log("Index 7 a leaf? ",mH.isLeaf(7));
console.log("Index 6 a leaf? ",mH.isLeaf(6));
console.log("Index 5 a leaf? ",mH.isLeaf(5));
console.log("Index 4 a leaf? ",mH.isLeaf(4));
console.log("Index 4 a leaf? ",mH.isLeaf(3));
console.log("Index 4 a leaf? ",mH.isLeaf(2));
console.log("Index 4 a leaf? ",mH.isLeaf(1));

//Is heap empty?
console.log("Is heap empty? ", mH.isEmpty());

//Print the heap array
console.log(mH.printHeapArray());

//Empty heap
mH.emptyHeap();

//Is heap empty?
console.log("Is heap empty? ", mH.isEmpty());

//Print the heap tree
mH.printHeapTree();

//Create a min heap from random unordered array
console.log("\nCreating a min heap from unordered array [1,7,3,9,4,2,5]:");
let createMinHeap = new minHeap();
let initArray = [1,7,3,9,4,2,5];
createMinHeap.minHeapify(initArray);

//Print the heap tree
createMinHeap.printHeapTree();

//Print the heap array
console.log(createMinHeap.printHeapArray());