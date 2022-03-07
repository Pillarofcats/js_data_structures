//Recursive
let pathExist = (source, graph, target) => {
  //Set to hold visited node values
  let nodesVisited = new Set();
  //Recursive depth first search
  return DFS(source, graph, target, nodesVisited);
}

//DFS Recursive
let DFS = (source, graph, target, nodesVisited) => {
  //Get node from source (source is the key)
  let sourceNode = graph.graph.get(source);
  //Check if we are at the target
  if(sourceNode.value === target) return true;
  //Check visited nodes
  if(nodesVisited.has(source)) return false;
  //Add node to visited to prevent cyclic loops
  nodesVisited.add(sourceNode.value);
  //Print visited nodes
  console.log("Visited: ", source);
  //Traverse the source nodes adjacent list of nodes
  for(let node of sourceNode.adjacent) {
    //Reursive DFS call
    if(DFS(node.value, graph, target, nodesVisited) === true) return true;
  }
  //Didn't find target
  return false;
}

module.exports = pathExist;