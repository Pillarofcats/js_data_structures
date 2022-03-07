const { Hash_Table } = require("./hash_table.js");

//Create a new hash table object
const ht = new Hash_Table();

//NOTE
//Duplicate keys are chained to prevent collision
//Chained keys are stored as arrays or linked lists

//Add key/values
ht.set("France", 111);
ht.set("Spain", 150);
ht.set("ǻ", 192);

//Display the all key/value in hash table
ht.display();

//Output
//83: [ France: 111 ]
//126: [ Spain: 150 ],[ ǻ: 192 ]

//Size of hash table
console.log(ht.size); 
//Output
//3

//Remove "Spain" from hash table
ht.remove("Spain");

//Display the all key/value in hash table
ht.display();

//Output
// 83: [ France: 111 ]
// 126: [ ǻ: 192 ]