const { Queue } = require("./Queue.js");

//Create a queue from an existing array
let array = [1,2,3,4,5,6,7,8,9,10];
let queue = new Queue(array);

//Print queue
console.log("The queue:");
console.log(queue.print());

//Remove 5 elements from top of queue (end of list)
console.log("Remove 5 elements from bottom of queue:");
let i = 5;
while(i > 0) {
  queue.dequeue();
  i--;
}

//Print queue
console.log(queue.print());

//Add 3 elements to top of queue (end of list)
console.log("Add 3 elements to top of queue:");
queue.enqueque(7);
queue.enqueque(9);
queue.enqueque(11);
console.log(queue.print());

//Peek at the top of queue (end of list)
console.log("Peek at start of queue:")
console.log(queue.peek_start());

//is queue empty?
console.log("Is the queue empty?");
console.log(queue.print());
console.log(queue.isEmpty());

//Make another queue
console.log("Make an empty queue:");
let empty_queue = new Queue();
console.log(empty_queue);

//Peek at the top of queue (end of list)
console.log("Peek at start of queue:")
console.log(empty_queue.peek_start());

//Is queue empty?
console.log("Is the queue empty?");
console.log(empty_queue);
console.log(empty_queue.isEmpty());