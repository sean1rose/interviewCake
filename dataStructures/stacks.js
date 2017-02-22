/* 
STACKS
  - data can be removed or added only from the top of a stacks
  - used in expression evaluation, handling of function calls

Stack is a list of elements that are only accessible from 1 end of the list - the TOP of the list 
- think of stack of trays
- LIFO (Last in First Out) data structure
- to get an element at the bottom of the stack, you have to dispose of all of the elements above it first [O(n)]

- PRIMARY FUNCTIONS:
  - add element to a stack (PUSH)
  - take element off of top of stack (POP)
  - view element on top (PEEP === pop w/o removal)
  - to keep track of where the top element is, we use a TOP variable that increments w/ each new element added (decrements when 1 removed)
  - clear removes all elements
  - length holds the # of variables
  - empty lets us know if no elements in it
*/

class Stack {
  constructor() {
    this.dataStore = [];
    this.length = this.dataStore.length;
    this.top = 0;
    this.empty = true;
  }

  push(element) {
    // since '++'  is after this.top, current value of top is used, THEN the value of top is incremented
    this.dataStore[this.top++] = element;
    // this.length = this.dataStore.length;
    // this.length++;
    // this.top++;
    this.empty = false;
  }

  pop() {
    var element = (this.dataStore.splice(this.top - 1, 1))[0];
    this.top--;
    return element;
    console.log('removing - this.dataStore[--this.top] -> ', this.dataStore[--this.top]);
    // this.length = this.dataStore.length;
    // this.length--;
    if (this.dataStore.length <= 0)
      this.empty = true;
  }

  peek() {
    return this.dataStore[this.top - 1];
  }

  view() {
    return this.dataStore;
  }
}

var isPalindrome = (word) => {
  var s = new Stack();
  for (var i = 0; i < word.length; i++){
    s.push(word[i]);
  }
  var reverse = '';
  console.log('s.length b4 - ', s.dataStore.length);
  while(s.dataStore.length > 0){
    reverse += s.pop();
    console.log('reverse after pop is - ', reverse);
  }
  console.log('reverse - ', reverse);
  if (word == reverse)
    return true;
  else 
    return false;
}