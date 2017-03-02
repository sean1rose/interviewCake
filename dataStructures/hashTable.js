/*
***HASH TABLE***
  - fast insertion, deletion, retrieval
  - slow search of minimum or maximum values (use BST)
*/

class HashTable {
  constructor(){
    // array lenght needs to be prime # and > than 100 in order to evenly disperse keys in the table
    this.table = new Array(137);
  }

  // hash function to store key in a random array element (aiming for even distribution among all elements of the array)
    // need to avoid collisions (where 2 items have same hash value and therefore stored at same idx)
  betterHash(data) {
    // use a prime constant
    const H = 37;
    var total = 0;
    for (var i = 0; i < data.length; i++){
      total += H * total + data.charCodeAt(i);
    }
    // take ASCII value of all characters, divide by length of array and take remainder (modulo)
    return parseInt(total % this.table.length);
  }

  // place data in hash table
  put(key, data) {
    // use hash func to HASH THE KEY to determine idx
    var idx = this.betterHash(key);
    // place data at hashed idx
    this.table[idx] = data;
  }

  get(key) {
    return this.table[this.betterHash(key)];
  }

  // display data from hash table
  showDistro() {
    for (var i = 0; i < this.table.length; i++){
      if (this.table[i] !== undefined){
        console.log(i + ' -> ' + this.table[i]);
      }
    }
  }

  // when given an array of items, loop thru and add each item in array to hash table...
  loopThruArrayAndPut(arr){
    for (var i = 0; i < arr.length; i++){
      this.put(arr[i]);
    }
  }
}
