//Iterative (Queue)
let BFS = (source, graph, target) => {
  //Get source node grom graph [graph get converted into an object so, first graph is the object, second graph is the Map(), and then .get(source)]
  let sourceNode = graph.graph.get(source);
  //Keep track of node values visited to prevent cyclic stack overflows
  let nodesVisited = new Set();
  //Queue to hold the current nodes
  let queue = [sourceNode];
  //Loop through until queue is empty
  while(queue.length > 0) {
    //Get the next node in the queue
    let currentNode = queue.shift();
    //Found target so return true
    if(currentNode.value === target) return true;
    //Traverse through the current node's adjacent list of nodes
    for(let node of currentNode.adjacent) {
      //If we have not visited a node, then add it to our Set() and push the node to the queue
      if(!nodesVisited.has(node.value)) {
        nodesVisited.add(node.value);
        queue.push(node);
        //Print visited nodes
        console.log("Visited: ", node.value);
      }
    }
  }
  //Didn't find target
  return false;
}

module.exports = BFS;