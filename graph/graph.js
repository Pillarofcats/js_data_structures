//Graph node implementation
class gNode {
  constructor(value) {
    this.value = value;
    this.adjacent = [];
  }

  //Get adjacent node
  getAdjacent = () => {
    return this.adjacent;
  }

  //Add node value to this node's adjacent list
  addAdjacent = (node) => {
    this.adjacent.push(node);
  }

  removeAdjacent = (node) => {
    //Get index of node to remove
    let index = this.adjacent.indexOf(node);
      //.indexOf returns -1 if node doesn't exist
      if(index > -1) {
      //Remove one node at index
      this.adjacent.splice(index,1);
      return node;
    }
  }

  //See if a node value is present in adjacent list []
  isAdjacent = (node) => {
    //.indexOf returns -1 if node doesn't exist, will return true index of node > -1
    return this.adjacent.indexOf(node) > -1;
  }
}

//Graph implementation
class Graph {
  constructor(graphType = "undirected") {
    //Check graph type
    if(graphType !== "directed" && graphType !== "undirected") graphType = "undirected";

    //Format for map: [value, node object]
    this.graph = new Map();
    //Specify "undirected" or "directed"
    this.type = graphType;
  }

  //Create a new node for graph unless it exists already
  addNode = (value) => {
    //If the node already exists return the node
    if(this.graph.has(value)) return this.graph.get(value);
    //Create new graph node with unique value
    let node = new gNode(value);
    //Add node to graph with unique value
    this.graph.set(value, node);
    return node;
  }

  //Add a directed edge to target node (node -> target node), create nodes just in case they don't exist (can't create duplicates)
  addEdge = (source, target) => {
    //Creating nodes if they don't exist, but if they exist it won't replace already existing
    //Add node returns new node value or existing node value
    let sourceNode = this.addNode(source);
    let targetNode = this.addNode(target);

    //Add target node to source node adjacent list
    sourceNode.addAdjacent(targetNode);
    //This is if the graph type is undirected it will add source node to target node adjacent list
    if(this.type === "undirected") {
      //Also add source node to target node adjacent list
      targetNode.addAdjacent(sourceNode);
    }
    return [sourceNode, targetNode];
  }

  //If target exists, loop through graph node values and delete target node from each node's adjacent list []
  removeNode = (value) => {
    //Get target node value to delete from graph
    let target = this.graph.get(value);
    //Target exists
    if(target) {
      //Loop through graph node values, deleting target node values from node adjacent lists []
      for(let node of this.graph.values()) {
        //For each node in the graph, remove the target node value from its adjacent list
        node.removeAdjacent(target);
      }
    }
    //Return the deleted target node value
    return this.graph.delete(value);
  }

  //Remove an edge
  removeEdge = (source, target) => {
    //Get nodes to remove edge
    let sourceNode = this.graph.get(source);
    let targetNode = this.graph.get(target);

    //Removing nodes, so each node must exist
    if(sourceNode && targetNode) {
      //Remove target node from source node adjacent list
      sourceNode.removeAdjacent(targetNode);
      //This is if the graph type is undirected it will remove source node to target node adjacent list
      if(this.type === "undirected") {
        //Also remove source node from target node adjacent list
        targetNode.removeAdjacent(sourceNode);
      }
    }
    return [sourceNode, targetNode];
  }

  //Print the graph
  printGraph = () => {
    console.log(`\nPrinted ${this.type} graph:`, this.graph);
  }
}

module.exports = Graph;