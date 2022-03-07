class Hash_Table {
  //Size of array (hash table) needs to be a prime number
  constructor(buckets = 127) {
    this.table = new Array(buckets);
    this.size = 0;
  };

  //Hash function
  _calcHash(key) {
    //Simple hash: return key.toString().length % this.size;
    let hash = 0;
    for(let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  };

  //Create a new key/value
  set(key, value) {
    //Key is hashed into a index value
    const index = this._calcHash(key);
    //If this index exists with a key and value, add a new key, value array (collision)
    if(this.table[index]) {
      for(let i = 0; i < this.table[index].length; i++) {
        if(this.table[index][i][0] === key) {
          this.table[index][i][1] = value;
          return;
        }
      }
      //Key is same value, but different string, add another [key, value]
      this.table[index].push([key, value]);
    } else {
      //Key does not exist, so make array and push [key, value]
      this.table[index] = [];
      this.table[index].push([key,value]);
    }
    this.size++;
  };

  //Get key at passed index
  get(key) {
    const index = this._calcHash(key);
    //[key, value] exists at this index
    if(this.table[index]) {
      //Loop through the array at table[index]
      for(let i = 0; i < this.table[index].length; i++) {
        if(this.table[index][i][0] === key) {
          //return the the value from key
          return this.table[index][i][1];
        }
      }
    }
    return undefined;
  };

  //Remove key at passed index
  remove(key) {
    const index = this._calcHash(key);

    if(this.table[index] && this.table[index].length) {
      //loop through the array at table[index]
      for(let i = 0; i < this.table[index].length; i++) {
        if(this.table[index][i][0] === key) {
          //remove one [key, value] pair at index i using: this.table[index].splice(i, 1);
          this.table[index].splice(i, 1);
          //decrement size after removal
          this.size--;
          return true;
        }
      }
    } else {
      return false;
    }
  };

  //Display each key/value in hash table
  display() {
    this.table.forEach((values, index) => {
      const linkedValues = values.map(([key, value]) =>`[ ${key}: ${value} ]`);
      console.log(`${index}: ${linkedValues}`);
    });
  };

};

module.exports = { Hash_Table };