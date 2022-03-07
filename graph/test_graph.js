//Import graph class that also holds node class
const graph = require("./graph.js");
//Import depth first search
const dfs = require("./DFS.js");
//Import breadth first search
const bfs = require("./BFS.js");

//DIRECTED
//Create directed graph
let dG = new graph("directed");

//Adding some nodes and edges
dG.addNode(1);
dG.addNode(2);
dG.addEdge(2,3);
dG.addEdge(4,2);

//Print map
dG.printGraph();

//Delete node 1
console.log("\nDelete node 1:")
dG.removeNode(1);

//Print map
dG.printGraph();

//Delete edge
console.log("\nDelete edge (2,3):")
dG.removeEdge(2,3);

//Print map
dG.printGraph();

//Delete node 2
console.log("\nDelete node 2:")
dG.removeNode(2);

//Print map
dG.printGraph();

//UNDIRECTED
//Create undirected graph (bi-directional)
let uG = new graph("undirected");

//Adding some nodes and edges
uG.addNode(1);
uG.addNode(2);
uG.addEdge(2,3);
uG.addEdge(4,2);

//Print map
uG.printGraph();

//Delete node 1
console.log("\nDelete node 1:")
uG.removeNode(1);

//Print map
uG.printGraph();

//Delete edge
console.log("\nDelete edge (2,3):")
uG.removeEdge(2,3);

//Print map
uG.printGraph();

//Delete node 2
console.log("\nDelete node 2:")
uG.removeNode(2);

//Print map
uG.printGraph();

//UNDIRECTED DEPTH FIRST SEARCH (cyclic)
//Create undirected graph (bi-directional)
console.log("\nUndirected Depth First Search:");
let uGDFS = new graph("undirected");

//Adding some nodes and edges
//Component 1 of graph, cannot reach component 2
uGDFS.addEdge(1,2);
uGDFS.addEdge(2,3);
uGDFS.addEdge(2,4);
uGDFS.addEdge(3,5);
uGDFS.addEdge(4,5);
uGDFS.addEdge(5,6);
//Component 2 of graph, cannot reach component 1
uGDFS.addEdge(7,8);

//True
console.log("\nDoes a path exist from node 1 component 1 to node 6 component 1?:");
let pathExist = dfs(1,uGDFS,6);
console.log(pathExist);

//True
console.log("\nDoes a path exist from node 7 component 2 to node 8 component 2?:");
pathExist = dfs(7,uGDFS,8);
console.log(pathExist);

//False
console.log("\nDoes a path exist from node 1 component 1 to node 8 component 2?:");
pathExist = dfs(1,uGDFS,8);
console.log(pathExist);

//DIRECTED DEPTH FIRST SEARCH (cyclic)
//Create directed graph
console.log("\nDirected Depth First Search:");
let dGDFS = new graph("directed");

//Adding some nodes and edges
//Component 1 of graph, cannot reach component 2
dGDFS.addEdge(1,2);
dGDFS.addEdge(2,3);
dGDFS.addEdge(2,4);
dGDFS.addEdge(3,5);
dGDFS.addEdge(4,5);
dGDFS.addEdge(5,6);
//Component 2 of graph, cannot reach component 1
dGDFS.addEdge(7,8);

//True
console.log("\nDoes a path exist from node 2 component 1 to node 5 component 1?:");
pathExist = dfs(2,dGDFS,5);
console.log(pathExist);

//False
console.log("\nDoes a path exist from node 5 component 1 to node 2 component 1?:");
pathExist = dfs(5,dGDFS,2);
console.log(pathExist);

//False
console.log("\nDoes a path exist from node 8 component 2 to node 7 component 2?:");
pathExist = dfs(8,dGDFS,7);
console.log(pathExist);



//UNDIRECTED BREADTH FIRST SEARCH (cyclic)
//Create undirected graph (bi-directional)
console.log("\nUndirected Breadth First Search:");
let uGBFS = new graph("undirected");

//Adding some nodes and edges
//Component 1 of graph, cannot reach component 2
uGBFS.addEdge(1,2);
uGBFS.addEdge(2,3);
uGBFS.addEdge(2,4);
uGBFS.addEdge(3,5);
uGBFS.addEdge(4,5);
uGBFS.addEdge(5,6);
//Component 2 of graph, cannot reach component 1
uGBFS.addEdge(7,8);

//True
console.log("\nDoes a path exist from node 1 component 1 to node 6 component 1?:");
pathExist = bfs(1,uGBFS,6);
console.log(pathExist);

//True
console.log("\nDoes a path exist from node 7 component 2 to node 8 component 2?:");
pathExist = bfs(7,uGBFS,8);
console.log(pathExist);

//False
console.log("\nDoes a path exist from node 1 component 1 to node 8 component 2?:");
pathExist = bfs(1,uGBFS,8);
console.log(pathExist);

//DIRECTED BREADTH FIRST SEARCH (cyclic)
//Create directed graph
console.log("\nDirected Breadth First Search:");
let dGBFS = new graph("directed");

//Adding some nodes and edges
//Component 1 of graph, cannot reach component 2
dGBFS.addEdge(1,2);
dGBFS.addEdge(2,3);
dGBFS.addEdge(2,4);
dGBFS.addEdge(3,5);
dGBFS.addEdge(4,5);
dGBFS.addEdge(5,6);
//Component 2 of graph, cannot reach component 1
dGBFS.addEdge(7,8);

//True
console.log("\nDoes a path exist from node 2 component 1 to node 5 component 1?:");
pathExist = bfs(2,dGBFS,5);
console.log(pathExist);

//False
console.log("\nDoes a path exist from node 5 component 1 to node 2 component 1?:");
pathExist = bfs(5,dGBFS,2);
console.log(pathExist);

//False
console.log("\nDoes a path exist from node 8 component 2 to node 7 component 2?:");
pathExist = bfs(8,dGBFS,7);
console.log(pathExist);