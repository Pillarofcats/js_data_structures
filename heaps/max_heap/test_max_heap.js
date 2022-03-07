const maxHeap = require("./max_heap.js");

//Instantiate new minHeap object
let mH = new maxHeap;

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

//Extract maximum element
console.log("Extracted maximum element: ", mH.extractMaxElement());

//Print the heap tree
mH.printHeapTree();

//Extract maximum element
console.log("Extracted maximum element: ", mH.extractMaxElement());

//Print the heap tree
mH.printHeapTree();

//Extract maximum element
console.log("Extracted maximum element: ", mH.extractMaxElement());

//Print the heap tree
mH.printHeapTree();

//Extract maximum element
console.log("Extracted maximum element: ", mH.extractMaxElement());

//Print the heap tree
mH.printHeapTree();

//Extract maximum element
console.log("Extracted maximum element: ", mH.extractMaxElement());

//Print the heap tree
mH.printHeapTree();

//Heap size
console.log("True heap size with a starting index of 1: ", mH.getHeapSize());

//Get maximum element
console.log("Get maximum element: ", mH.getMaximum());

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

//Create a max heap from random unordered array
console.log("\nCreating a max heap from unordered array [1,7,3,9,4,2,5]:");
let createMaxHeap = new maxHeap();
let initArray = [1,7,3,9,4,2,5];
createMaxHeap.maxHeapify(initArray);

//Print the heap tree
createMaxHeap.printHeapTree();

//Print the heap array
console.log(createMaxHeap.printHeapArray());
