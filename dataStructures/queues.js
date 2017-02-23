/*
QUEUES
  - data inserted at the end and removed from the front (data is stored in the order in which they occur)
  - think of customers standing in a line  (FIFO - first in first out)

  PRIMARY OPERATIONS:
    - insert element at end (enqueue)
    - remove from beginning (dequeue)
    - view element at front (peek)
    - length property
    - remove all elemnts (clear)
*/

class Queue {
  constructor() {
    this.dataStore = [];
    this.length = 0;
  }

  // add item at end
  enequeue(item) {
    this.dataStore.push(item);
    this.length++;
  }

  // remove from beginning
  dequeue() {
    this.dataStore.shift();
    if (this.length > 0)
      this.length--;
  }

  // loop thru all items, looking for the highest priority (aka the lowest code) and splicing that element out...
  priorityDequeue() {
    var lowest = this.dataStore[0];
    var lowestIdx = 0;
    for (var i = 0; i < this.dataStore.length; i++){
      if (this.dataStore[i] < lowest){
        lowest = this.dataStore[i];
        lowestIdx = i;
      }
    }
    return this.dataStore.splice(i, 1);
    this.length--;
    
  }

  // view 1st element;
  peek() {
    return this.dataStore[0];
  }

  back() {
    return this.dataStore[this.dataStore.length - 1];
  }

  isEmpty() {
    if (this.dataStore.length > 0)
      return false;
    else
      return true;
  }

  clear() {
    this.dataStore = [];
  }
}