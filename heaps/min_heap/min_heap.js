//Minimum heap data structure that uses a list
class MinHeap {
  constructor() {
    this.heap = [null];
  }

  //Return the element with a minimum value (parent, top of minimum heap)
  getMinimum() {
    return this.heap[1];
  }

  //Return index of parent element of passed element index (i/2)
  getParent(elementsIndex) {
    return Math.floor((elementsIndex)/2);
  }

  //Return index of the left child elements of passed parent index (2i)
  getLeftChild(parentIndex) {
    return (2*parentIndex);
  }

  //Return index of the right child elements of passed parent index (2i+1)
  getRightChild(parentIndex) {
    return (2*parentIndex)+1;
  }

  //Swap two elementss with passed indexes using destructuring, this is to maintain the heap property
  swapElements(index1, index2) {
    [ this.heap[index1], this.heap[index2] ] = [ this.heap[index2], this.heap[index1] ];
  }

  //Return true if a elements with passed index has no children, false if a elements with passed index has children
  isLeaf(elementsIndex) {
    //MINIMUM RANGE: Math.floor(this.heap.length/2) <= index, checks the minimum index range for the heap level determined by passed elements index
    //MAXIUMUM RANGE: index <= this.heap.length-1, checks the maximum index range for the heap level determined by passed elements index
    return ( Math.floor(this.heap.length/2) <= elementsIndex && elementsIndex <= this.heap.length-1 );
  }

  //Maintain heap property for insert element
  minBubbleUp(elementsIndex) {
    //Traverses up from current elements index to the top of the heap
    while(elementsIndex > 1) {
      //Get the index of parent elements
      let parentIndex = this.getParent(elementsIndex);
      //Compare current elements value with parent elements value, if current value < parent value, swap
      if(this.heap[elementsIndex] <= this.heap[parentIndex]) {
        this.swapElements(elementsIndex, parentIndex);
        //Set elements index to parent index to traverse to the top of the heap
        elementsIndex = parentIndex;
      } else break;
    }
  }

  //True heap size accounting for index start at 1
  getHeapSize() {
    return this.heap.length-1;
  }

  //Maintain heap property after minimum extraction
  minBubbleDown() {
    //Starting at the top of heap
    let currentIndex = 1;
    let leftChildIndex;
    let rightChildIndex;
    while(true) {
      //Set children index
      leftChildIndex = this.getLeftChild(currentIndex);
      rightChildIndex = this.getRightChild(currentIndex);

      //Compare left and right children elements and parent elements
      if(this.heap[leftChildIndex] <= this.heap[rightChildIndex] && this.heap[leftChildIndex] <= this.heap[currentIndex]) {
        //Swap with left child
        console.log("left is less: ", this.heap[leftChildIndex], "right: ", this.heap[rightChildIndex]);
        this.swapElements(leftChildIndex, currentIndex);
        currentIndex=leftChildIndex;
      } else if(this.heap[rightChildIndex] <= this.heap[leftChildIndex] && this.heap[rightChildIndex] <= this.heap[currentIndex]) {
        //Swap with right child
        console.log("left: ", this.heap[leftChildIndex], "right is less: ", this.heap[rightChildIndex]);
        this.swapElements(rightChildIndex, currentIndex);
        currentIndex=rightChildIndex;
      } else if(!this.heap[rightChildIndex] && this.heap[leftChildIndex] <= this.heap[currentIndex]) {
        //Case for right child doesn't exist, so swap with left child if it is less than parent
        this.swapElements(leftChildIndex, currentIndex);
        //Break because we know the index has reached the end of the array
        break;
      }
      //Fail case
      else break;
    }
  }

  //Convert passed initial array into a min heap
  minHeapify(initArray) {
    //Prepare initial array by converting to max heap
    initArray.forEach((element) => {
      this.insertElement(element);
    });
    return this.heap;
  }

  //Insert a new elements to end of heap
  insertElement(data) {
    this.heap.push(data);
    //Minimum bubble up of recently created elements, the index is inserted into the minimum heap
    const currentIndex = this.heap.length-1;
    this.minBubbleUp(currentIndex);
    return data;
  }

  //Print heap tree
  printHeapTree() {
    if(this.isEmpty()) {
      return console.log("Cannot print tree, the heap is empty.");
    }

    let minIndex = 1;
    let maxIndex = 2;
    let elementsExists = true;
    //Strange formatting
    let space = ["   ", "   ", "  "];

    while(elementsExists) {
      let tempArr = [];
      for(minIndex; minIndex < maxIndex; minIndex++) {
        //So, checking each level, stops when a elements is undefined and it isn't a value of zero which triggers as false: set false flag for elements and break out of the print loop
        if(!this.heap[minIndex] && this.heap[minIndex] !== 0) {
          elementsExists = false;
          break;
        }
        //Pushing each value from heap level into a temp array to print next
        tempArr.push(space.join("") + this.heap[minIndex]);
      }
      //Printing the heap level and then strange formatting with the space variable
      console.log(tempArr.join(" "));
      space.shift();

      //So, this is getting the minimum range of the current heap level and maximum range
      minIndex=maxIndex;
      //Since each level after the first level (parent) 1*2=2 -> 2*2=4 -> 4*2=8
      maxIndex*=2;
    }
  }

  //Delete minimum element without a return
  emptyHeap() {
    this.heap = [null];
    return console.log("Heap emptied.")
  }

  //Print heap array
  printHeapArray() {
    return this.heap;
  }

  //Empty?
  isEmpty() {
    return this.heap.length > 1 ? false : true;
  }

  //Extract top of heap (smallest value) and then bubble down
  extractMinElement() {
    let minElement = this.heap[1];
    //Remove last element and set it to index 1 (top of heap)
    let lastElement = this.heap.pop();
    this.heap[1] = lastElement;
    //We know element index is 1 (top of heap)
    this.minBubbleDown();
    //Return minimum element (top of heap)
    return minElement;
  }
};

module.exports = MinHeap;