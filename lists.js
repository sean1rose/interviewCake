// LISTS
// useful if we don't have to perform searches on the items or put them into sorted order
// ADT - list abstract data type

/*
List = ordered sequence of data.
  - each item is an element (can be any data type)
  - length, append (to end of list), insert (wherever, including the beginning), remove (delete), clear (remove all)
  - front of list, end of list,
  - move using next() or prev(), or moveTo(n)
*/

class List {
  constructor(){
    this.pos = 0;
    this.dataStore = [];
    this.listSize = this.dataStore.length;
  }

  append(element) {
    // adds element to end of list...
    // this.dataStore.push(element);
    // after element is appended, listSize is incremented by 1
    this.dataStore[this.listSize++] = element;
  }

  find(element) {
    for (var i = 0; i < this.dataStore.length; i++){
      var current = this.dataStore[i];
      if (current === element){
        return i;
      }
    }
    // if no match, return -1...
    return -1;
  }

  remove(element) {
    var elementIdx = this.find(element);
    if (elementIdx !== -1){
      // if element exists...
      this.dataStore.splice(elementIdx, 1);
      // don't forget to change listSize...
      --this.listSize;
      return true;
    } else {
      // the element you want to remove doesn't exist, return -1;
      return false;
    }
  }

  // retrieves a lists elements...
  toString() {
    return this.dataStore;
  }

  insert(element, after) {
    // this gives u the index to insert after...
    var insertPos = this.find(after);
    if (insertPos !== -1){
      // insert element after insertPos, don't remove any elements, here's the element to add...
      this.dataStore.splice(insertPos+1, 0, element);
      ++this.listSize;
      return true;
    }
    return false;
  }

  clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
  };

  contains(element) {
    // loop thru looking for a match...
    for (var i = 0; i < this.dataStore.length; i++){
      if (this.dataStore[i] === element){
        return true;
      }
    }
    return false;
  }

  front() {
    this.pos = 0;
  }

  end() {
    this.pos = this.listSize - 1;
  }

  prev() {
    if (this.pos > 0){
      --this.pos;
    }
  }

  next() {
    if (this.pos > 0){
      ++this.pos;
    }
  }

  currentPos() {
    return this.pos;
  }

  moveTo(position){
    this.pos = position;
  }

  getElement() {
    return this.dataStore[this.pos];
  }
  
}