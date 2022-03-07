const BST = require("./binary_search_tree.js");

//Create new bst object
let bst = new BST();

//Insert some data
console.log("\nInserted 3, 5, 7:");
bst.insertData(5);
bst.insertData(3);
bst.insertData(7);

console.log(bst);

//Print leaf nodes
console.log("\nLeaf Nodes are: ");
bst.printLeaves();

//Remove element 2
console.log("\nRemove element 2 which doesn't exist, no change");
bst.removeElement(2);

console.log(bst);

//Remove element 3
console.log("\nRemove element 3, change to bst");
bst.removeElement(3);

console.log(bst);

//Remove element 5
console.log("\nRemove element 5, change to bst");
bst.removeElement(5);

console.log(bst);

//Remove element 7
console.log("\nRemove element 7, change to bst");
bst.removeElement(7);

console.log(bst);

//Insert some new data
console.log("\nInserted 5, 3, 7, 6, 1:");
bst.insertData(5);
bst.insertData(3);
bst.insertData(7);
bst.insertData(6);
bst.insertData(1);

console.log(bst);

//Print leaf nodes
console.log("\nLeaf Nodes are: ");
bst.printLeaves();

console.log("\nRemove element 5, change to bst");
bst.removeElement(5);

console.log(bst);

console.log("\nRemove element 3, change to bst");
bst.removeElement(3);

console.log(bst);

//Create new bst object
let bst2 = new BST();

//Insert some new data
console.log("\nInserted 9, 4, 17, 3, 6, 22, 5, 7, 20:");
bst2.insertData(9);
bst2.insertData(4);
bst2.insertData(17);
bst2.insertData(3);
bst2.insertData(6);
bst2.insertData(22);
bst2.insertData(5);
bst2.insertData(7);
bst2.insertData(20);

console.log(bst2);

//Print leaf nodes
console.log("\nLeaf Nodes are: ");
bst2.printLeaves();

//Check if tree is balanced
console.log("\nMinimum tree height: ", bst2.minTreeHeight());
console.log("Maximum tree height: ", bst2.maxTreeHeight());
console.log("Is tree balanced? ", bst2.isTreeBalanced());

//Insert data to change tree balance
console.log("\nInserted 10 to bst to change tree balance.");
bst2.insertData(10);

//Check if tree is balanced
console.log("\nMinimum tree height: ", bst2.minTreeHeight());
console.log("Maximum tree height: ", bst2.maxTreeHeight());
console.log("Is tree balanced? ", bst2.isTreeBalanced());

//BST ordered sorting
console.log("\nBST ordered sorting");
console.log("InOrder: ", bst2.inOrder());
console.log("PreOrder: ", bst2.preOrder());
console.log("PostOrder: ", bst2.postOrder());
console.log("levelOrder: ", bst2.levelOrder());

