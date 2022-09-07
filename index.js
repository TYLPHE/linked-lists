function LinkedList() {
  return {
    head: null,

    // appends new node at the end of the list with value(v)
    append(v) {
      // newNode object created with property data
      let newNode = Node(v);

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
      let newNode = Node(v, this.head);

      // previous pointer now points to newNode
      this.head = newNode;
    },

    // returns total number of nodes in the list
    size() {
      let count = 0;
      let current = this.head;
      while (current !== null) {
        count += 1;
        current = current.next;
      }
      console.log('size(): ', count);
      return count;
    },

    // returns the first node in the list
    findHead() {
      console.log('findHead(): ', this.head.value)
      return this.head.value;
    },

    // returns the last node in the list
    tail() {
      let tail = this.head;
      while (tail.next) {
        tail = tail.next;
      }
      console.log('tail(): ', tail.value);
      return tail.next;
    },

    // returns the node at the given index
    at(index) {
      let i = 0;
      let current = this.head;
      if (index < 0) return;
      while (i < index) {
        i += 1;
        if (current.next) {
          current = current.next;
        } else {
          return console.error(`Out of range. Max value is ${this.size() - 1}`)
        }
      }
      console.log('at(): ', current)
      return current;
    },

    // removes the last element from the list
    pop() {
      let current = this.head;
      while (current.next.next) {
        current = current.next;
      }
      current.next = null;
      console.log('pop() :', current);
      return current;
    },

    // returns true if the value is in the list and otherwise returns false.
    contains(v) {
      let current = this.head;
      while (current) {
        if (current.value === v) {
          console.log('contains(): ', true)
          return true;
        }
        current = current.next;
      }
      console.log('contains(): ', false)
      return false;
    },

    // returns the index of the node containing value, or null if not found
    find(v) {
      let current = this.head;
      let i = 0;
      while (current) {
        if (current.value === v) {
          console.log(`find(${v}): `, i);
          return i;
        }
        i += 1;
        current = current.next;
      }
      console.log(`find(${v}): `, null)
      return null
    },

    // prints the linked list to the console
    toString() {
      let str = '';
      let current = this.head;
      while (current) {
        if (!current.next) {
          str += `(${current.value}) -> null`;
        } else {
          str += `(${current.value}) -> `;
        }
        current = current.next;
      }
      console.log('toString(): ', str)
      return str;
    },

    // inserts new node with the provided value at the given index
    insertAt(v, index) {
      let current = this.head;
      let i = 0;
      while (current) {
        if (i === index - 1) {
          const newNode = Node(v, current.next);
          current.next = newNode;
        }
        current = current.next;
        i += 1;
      }
    },

    // removes the node at the given index
    removeAt(index) {
      let current = this.head;
      let i = 0;
      while (current) {
        if (i === index - 1) {
          current.next = current.next.next
        }
        i += 1;
        current = current.next;
      }
    },
  }
}

function Node(v = null, next = null) {
  return {
    value: v,
    next: next,
  }
}

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