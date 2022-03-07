const { Stack } = require("./Stack.js");

//Create a stack from an existing array
let array = [1,2,3,4,5,6,7,8,9,10];
let stack = new Stack(array);

//Print stack
console.log("The stack:");
console.log(stack.print());

//Remove 5 elements from top of stack (end of list)
console.log("Remove 5 elements from top of stack:");
let i = 5;
while(i > 0) {
  stack.pop();
  i--;
}

//Print stack
console.log(stack.print());

//Add 3 elements to top of stack (end of list)
console.log("Add 3 elements to top of stack:");
stack.push(7);
stack.push(9);
stack.push(11);
console.log(stack.print());

//Peek at the top of stack (end of list)
console.log("Peek at top of stack:")
console.log(stack.peek_end());

//Is stack empty?
console.log("Is the stack empty?");
console.log(stack.print());
console.log(stack.isEmpty());

//Make another stack
console.log("Make an empty stack:");
let empty_stack = new Stack();
console.log(empty_stack);

//Peek at the top of stack (end of list)
console.log("Peek at top of stack:")
console.log(empty_stack.peek_end());

//Is stack empty?
console.log("Is the stack empty?");
console.log(empty_stack);
console.log(empty_stack.isEmpty());