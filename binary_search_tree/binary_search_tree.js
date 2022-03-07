//Node class used to hold data and node children stored in left and right keys
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

//Binary Search Tree, utilizing recursive methods
class BST {
  constructor() {
    this.root = null;
  }

  //Insert data by creating new nodes and storing them
  insertData(data) {
    //Create a new node data struct
    let newNode = new Node(data);
    //No root, so set a new node at root
    if(this.root === null) {
      this.root = newNode;
    } else {
      //Root exists, so find the right location to store new node in BST
      this.findInsertLocation(this.root, newNode);
    }
  }

  //Find insert location for new node
  findInsertLocation(currNode, newNode) {
    //CurrNode > newNode, so go left
    if(currNode.data > newNode.data) {
      //Trying left, left spot open
      if(currNode.left === null) {
        currNode.left = newNode;
      } else {
        //Left node not open, so use recursion with findInsertLocation()
        this.findInsertLocation(currNode.left, newNode);
      } 
    } else if(currNode.data < newNode.data) {
      //CurrNode < newNode, so go right
        //Trying right, right spot open
        if(currNode.right === null) {
          currNode.right = newNode;
        } else {
          //Right node not open, so use recursion with findInsertLocation()
          this.findInsertLocation(currNode.right, newNode);
        }
      } else {} //All other fail cases and duplicates will do nothing
  }

  removeElement(data) {
    //Searching for Node, if it exists and remove it, but we are modifying the tree so we need to set the original root to the new returned root
    this.root = this.findDelete(data, this.root);
  }

  findDelete(data, currNode) {
    //FINDING
    //Case 1, tree is null (empty)
    if(currNode === null) {
      //Need to return null since this.root is set equal to the recursive method findDelete(data, this.root)
      //[this.root = findDelete(data, this.root)]
      return null;
    } 
    //Case 2, traversing left sub tree
    else if(data < currNode.data) {
      //Go to left tree, and recursively traverse through the left sub tree
      currNode.left = this.findDelete(data, currNode.left);
      //Need to return current node to update our position in the tree
      return currNode;
    } 
    //Case 3, traversing right sub tree
    else if(data > currNode.data) {
      //Go to right tree, and recursively traverse through the right sub tree
      currNode.right = this.findDelete(data, currNode.right);
      //Need to return current node to update our position in the tree
      return currNode;
    } 
    //DELETING
    //Case 4, found, so delete
    else {
      //Case 1, no children, so we don't need to restructure the binary search tree since there are no leafs
      if(currNode.left === null && currNode.right === null) {
        //Deleting/overwriting node of interest and replacing it with null since it has no children
        currNode = null;
        return currNode;
      }
      //Case 2, node has left child node, but no right child node
      if(currNode.right === null) {
        //Deleting/overwriting node of interest and replacing it with child node
        currNode = currNode.left;
        return currNode;
      }
      //Case 3, node has right child node, but no left child node
      else if(currNode.left === null) {
        //Deleting/overwriting node of interest and replacing it with child node
        currNode = currNode.right;
        return currNode;
      }
      //Case 4, node has both right and left child node, so we need to maintain binary search tree properties
      //To do this we need to find the max of the left subtree OR the min of the right subtree of the current node
      else {
        //Minimum node of the right sub tree
        let minNode = this.findMinNode(currNode.right);
        //Replacing the current node.data with the minimum node.data
        currNode.data = minNode.data;
        //Remove minimum node found with findMinNode from the right subtree
        currNode.right = this.findDelete(minNode.data, currNode.right)
        //Return the corrected subtree of the current node
        return currNode;
      }
    }
  }

  //Find the minimum value node in a tree (used in determining nextInLine)
  findMinNode(currNode) {
    //So the current node.left is null, which means current node is the minimum
    if(currNode.left === null) {
      //Minimum node
      return currNode;
    }
    //Traversing the left sub tree of the current node to fine the minimum node
    else {
      currNode = this.findMinNode(currNode.left);
      return currNode;
    }
  }

  //From root count each level down to the last node missing 2 child nodes (leaf node, no children)
  maxTreeHeight(currNode = this.root) {
    //Check for empty root
    if(currNode === null) {
      //Root is empty
      return -1;
    }
    //Recurse through tree levels retaining left and right counters
    let left = this.maxTreeHeight(currNode.left);
    let right = this.maxTreeHeight(currNode.right);
    if(left > right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  //From root count each level down to the first node missing 1 child node (default parameter is root node)
  minTreeHeight(currNode = this.root) {
    //Check for empty root
    if(currNode === null) {
      //Root is empty
      return -1;
    }
    //Recurse through tree levels retaining left and right counters
    let left = this.minTreeHeight(currNode.left);
    let right = this.minTreeHeight(currNode.right);
    if(left < right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  //Compare minimum tree height with maximum tree height, if the difference
  isTreeBalanced() {
    //If minimim height is >= maxheight -1 then the bst should be balanced
    //Since the minimum height indicates that the tree nodes are filled to the level of maximum height
    return (this.minTreeHeight() >= this.maxTreeHeight()-1);
  }
  

  //Start at left most node and end at right most node (ascending) (ex. output: 1,2,3,4,5,6,7,8,9)
  inOrder() {
    //Root empty
    if(this.root === null) {
      return null;
    }
    //Begin sorting the nodes
    else {
      let nodeList = [];
      let sortInOrder = (currNode) => {
        //Short circuit evaluation: if first statement is true then execute second statement after the "&&"
        currNode.left && sortInOrder(currNode.left);
        nodeList.push(currNode.data);
        currNode.right && sortInOrder(currNode.right);
      }
      sortInOrder(this.root);
      return nodeList;
    }
  }

 //Start at root node and then get all left root nodes first then all the right root nodes from the root.left subtree,
 //then get root.right left root nodes and then the right root nodes
  preOrder() {
    //Root empty
    if(this.root === null) {
      return null;
    }
    //Begin sorting the nodes
    else {
      let nodeList = [];
      let sortPreOrder = (currNode) => {
        //Short circuit evaluation: if first statement is true then execute second statement after the "&&"
        nodeList.push(currNode.data);
        currNode.left && sortPreOrder(currNode.left);
        currNode.right && sortPreOrder(currNode.right);
      }
      sortPreOrder(this.root);
      return nodeList;
    }
  }

  //Start at root.left subtree leaf nodes from left to right, then get the root nodes from root.left sub tree,
  //after get root.right subtree leaf nodes from left to right, then get the root nodes from root.right sub tree
  postOrder() {
    //Root empty
    if(this.root === null) {
      return null;
    }
    //Begin sorting the nodes
    else {
      let nodeList = [];
      let sortPostOrder = (currNode) => {
        //Short circuit evaluation: if first statement is true then execute second statement after the "&&"
        currNode.left && sortPostOrder(currNode.left);
        currNode.right && sortPostOrder(currNode.right);
        nodeList.push(currNode.data);
      }
      sortPostOrder(this.root);
      return nodeList;
    }
  }
  //Uses a BFS (Breadth-First Search) to get each node on a level from left to right starting at root
  levelOrder() {
    let nodeList = [];
    let queue = [];
    if(this.root !== null) {
      //Copy bst to queue array by pushing this.root
      queue.push(this.root);
      while(queue.length > 0) {
        let currNode = queue.shift();
        nodeList.push(currNode.data);
        if(currNode.left !== null) {
          queue.push(currNode.left);
        }
        if(currNode.right !== null) {
          queue.push(currNode.right);
        }
      };
      return nodeList;
    } else {
        return null;
    }
  }

  //Print leaf nodes in a binary search tree using recursion (default parameter set to root node)
  printLeaves(currNode = this.root) {
    //Base case returns when at end, recursion
    if(currNode === null) {
      return;
    }
    //These are the leaf nodes without left or right children (subtrees)
    if(currNode.left === null && currNode.right === null) {
      console.log(currNode.data);
      return;
    }
    //Searching for left subtree leaf nodes
    if(currNode.left !== null) {
      this.printLeaves(currNode.left);
    }
    //Searching for right subtree leaf nodes
    if(currNode.right !== null) {
      this.printLeaves(currNode.right);
    }
  }
}

module.exports = BST, Node;