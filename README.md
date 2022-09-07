# linked-lists
Creating a linked list data structure and its functions

## [Link to assignment](https://www.theodinproject.com/lessons/javascript-linked-lists)
## [Try Linked List here](https://TYLPHE.github.io/linked-list/)

This project contains two factory functions called `Node`, which returns the node value and next pointer, and `LinkedList`, which contains head and all of its functions:
```javascript
function Node(v = null, next = null) {
  return {
    value: v,
    next: next,
  }
}

function LinkedList() {
  return {
    head: null,
    // appends new node at the end of the list with value(v)
    append(v) {
      // ...code
    },

    // prepends new node at the beginning of the list with value(v)
    prepend(v) {
      // ...code
    },

    // returns total number of nodes in the list
    size() {
      // ...code
    },

    // returns the first node in the list
    findHead() {
      // ...code
    },

    // returns the last node in the list
    tail() {
      // ...code
    },

    // returns the node at the given index
    at(index) {
      // ...code
    },

    // removes the last element from the list
    pop() {
      // ...code
    },

    // returns true if the value is in the list and otherwise returns false.
    contains(v) {
      // ...code
    },

    // returns the index of the node containing value, or null if not found
    find(v) {
      // ...code
    },

    // prints the linked list to the console
    toString() {
      // ...code
    },

    // inserts new node with the provided value at the given index
    insertAt(v, index) {
      // ...code
    },

    // removes the node at the given index
    removeAt(index) {
        // ...code
    },
  }
}
```

I manually tested each function by creating a list and using each function with different values. 
```javascript
const list = LinkedList();
list.append(2);
list.prepend(1);
list.prepend(0);
list.append(3);
list.append(4);
list.append(5);
list.size();
list.findHead();
list.tail();
list.at(1);
list.pop();
list.size();
list.contains(4);
list.find(4);
list.toString();
list.insertAt('insert', 3);
list.toString();
list.removeAt(4);
list.toString();
```

Because I printed all results to the console, I was able to VSCode's Live Server addon to quickly enter values and check my results.

Below is the console's output:
```
size():  6                                                        index.js:40:15
findHead():  0                                                    index.js:46:15
tail():  5                                                        index.js:56:15
at(1):  Object { value: 1, next: {…} }                            index.js:73:15
pop() : Object { value: 4, next: null }                           index.js:84:15
size():  5                                                        index.js:40:15
contains(4):  true                                                index.js:93:19
find(4):  4                                                       index.js:108:19
toString():  (0) -> (1) -> (2) -> (3) -> (4) -> null              index.js:130:15
toString():  (0) -> (1) -> (2) -> (insert) -> (3) -> (4) -> null  index.js:130:15
toString():  (0) -> (1) -> (2) -> (insert) -> (4) -> null         index.js:130:15
```