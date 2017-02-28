/* LINKED LISTS - OBJECT BASED IMPLEMENTATION
  Array Shortcomings:
    -fixed in length - so hard to add new data when the last element of the array is reached
    -adding/removing data is difficult, cuz you have to move array elements up or down to reflect addition/deletion
      - but w/ JS, can use split()
    -JS arrays are implemented as objects, causing them to be less efficient than C++ or Java arrays...
  Linked List - can be used where a 1-D array is used, (except when you need random access to the elements of the list - use an array)
  *DEFINITION:
    - a collection of objects called nodes. Each node is linked to a successor node using obj reference
    - array elements are referenced by their position, linked list elements are referenced by their r/s to other elements in the LL
    - Mark the end of a LL by pointing to a null node
    - 1st element is HEAD
    - INSERTION === EFFICIENT
      - to insert: the [Previous Node] (link of the node b4 the inserted node) is changed to point to the [new node]
        - the [new node]'s link is set to the node the [Previous Node] was pointing to before insertion
    - REMOVAL === EFFICIENT
      - link of Previous Node is redirected to point to the node the [removed node] is pointing to, while pointing the [removed node] to null

  * Use a [NODE] class and a [LINKED LIST] class
*/


/***** REGULAR LINKED LIST *****/
class Node {
  constructor(element){
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = new Node('head');
    console.log('this.head = ', this.head);
  }


  find(item) {
    // cycle thru LL - look for match on element
    var currentNode = this.head;
    while(currentNode.element != item){
      // point currentNode to the next node (start at head, move to next, then next)
      currentNode = currentNode.next;
    }
    // return the found node...
    return currentNode;
  }


  // 1,2,3,4
  // insert(2b, 2)
  insert(newElement, itemToInsertAfter) {
    // 2b
    var addedElement = new Node(newElement);
    // 2
    var current = this.find(itemToInsertAfter);
    // set 3 (2's next) as 2b's next
    addedElement.next = current.next;
    // set 2b as 2's next
    current.next = addedElement;

  }

  findPrevious(item) {
    var currentNode = this.head;
    // so long as [not at last element] && [next element is not the item we're looking for]
    while(currentNode.next != null && currentNode.next.element != item) {
      // advance to the next node so long as not last node && next node is not the item. 
      currentNode = currentNode.next;
      // when next node is the item -> return current node...
    }
    return currentNode;
  }

  remove(item) {
    // find previous item
    var previousItem = this.findPrevious(item);
    // point previous item's next at find(item).next
    // point find(item).next at null
    /*
    if (previousItem.next !== null){
      previousItem.next = previousItem.next.next;
    }
    */
    var currentItem = this.find(item);
    previousItem.next = currentItem.next;
    currentItem.next = null;
  }

  display() {
    var currentNode = this.head;
    while (currentNode.next != null){
      console.log(currentNode.next.element);
      currentNode = currentNode.next;
    }
  }
}

/***** DOUBLY LINKED LIST *****/
class Node {
  constructor(item){
    this.element = item;
    this.next = null;
    this.previous = null;
  }
}

class DoubleLinkedList {
  constructor(){
    this.head = new Node('head');
  }

  find(item) {
    var current = this.head;
    while(current.element != item){
      current = current.next;
    }
    return current;
  }

  insert(insertAfter, itemToInsert) {
    var insertedItem = new Node(itemToInsert);
    var itemToInsertAfter = this.find(insertAfter);
    insertedItem.next = itemToInsertAfter.next;
    insertedItem.previous = itemToInsertAfter;
    itemToInsertAfter.next = insertedItem;
  }

  remove(item) {
    var current = this.find(item);
    current.previous.next = current.next;
    current.next.previous = current.previous;
    current.previous = null;
    current.next = null;
    return current.element;
  }

  findLast(){
    var current = this.head;
    while(current.next != null){
      current = current.next;
    }
    return current;
  }

  displayReverse(){
    var current = this.findLast();
    while(current.previous != null){
      console.log(current.element);
      current = current.previous;
    }
  }
}