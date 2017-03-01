/* DICTIONARY
  - DS that stores data as k-v pairs
*/

class Dictionary {
  constructor() {
    this.dataStore = [];
  }

  add(key, value) {
    this.dataStore[key] = value;
  }

  find(key) {
    return this.dataStore[key];
  }

  remove(key) {
    delete this.dataStore[key];
  }

  showAll() {
    // Object.keys returns all the keys stored in that object
    for (var key in this.dataStore.sort((a,b) => a - b)){
      console.log('a: ' + key + " -> " + this.dataStore[key]);
    }
  }

  count() {
    var n = 0;
    for (var key in this.dataStore) {
      ++n;
    }
    return n;
  }

  clear() {
    for (var key in this.dataStore) {
      delete this.dataStore[key];
    }
  }
}