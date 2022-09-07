function LinkedList() {
  return {
    head: null,

    // appends new node at the end of the list with value(v)
    append(v) {
      // newNode object created with property data
      let newNode = {...Node(v)};

      // when head = null, head will point to the newNode
      // else find end of tail and update the tail's next pointer
      if (this.head === null) {
        this.head = newNode;
      } else {
        let tail = this.head;
        while (tail.next !== null) {
          tail = tail.next;
        }
        tail.next = newNode;
      }
    },

    // prepends new node at the beginning of the list with value(v)
    prepend(v) {
      // newNode object created with property data
      let newNode = {...Node(v)};

      // pointer is assigned to head. Both pointers are assigned to same node.
      newNode.next = this.head;

      // previous pointer now points to newNode
      this.head = newNode;
    },

    // returns total number of nodes in the list
    size() {
      let count = 0;
      let current = this.head;
      console.log(current.next)
      while (current.next !== null) {
        count += 1;
        current = current.next;
      }
      console.log(count);
      return count;
    },

    // returns the first node in the list
    findHead() {
      return this.head.value;
    },

    // returns the last node in the list
    tail() {
      if (this.head === null) {
        return this.head
      } else {
        let tail = this.head;
        while (tail.next.value) {
          tail = tail.next;
        }
        console.log(tail.value);
        return tail.next;
      }
    },

    // returns the node a tthe given index
    at(index) {
  
    },

    // removes the last element from the list
    pop() {
  
    },

    // returns true if the value is in the list and otherwise returns false.
    contains(v) {
  
    },

    // returns the index of the node containing value, or null if not found
    find(v) {
  
    },

    // prints the linked list to the console
    toString() {
  
    },

    // inserts new node with the provided value at the given index
    insertAt(v, index) {
  
    },

    // removes the node at the given index
    removeAt(index) {
  
    },
  }
}

function Node(v = null, next = null) {
  return {
    value: v,
    next: next,
  }
}

const list = {...LinkedList()};
list.append(2);
list.prepend(1);
list.prepend(9);
list.size();
list.findHead();