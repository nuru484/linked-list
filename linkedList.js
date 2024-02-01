class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = newNode;
  }

  prepend(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
  }

  size() {
    let total = 0;
    let current = this.head;

    while (current) {
      total++;
      current = current.nextNode;
    }
    return total;
  }

  getHead() {
    return this.head;
  }
  tail() {
    let last = null;
    let current = this.head;

    while (current) {
      if (current.nextNode === null) {
        last = current;
      }
      current = current.nextNode;
    }
    return last;
  }
  at(index) {
    let node = null;
    let total = 0;
    let current = this.head;

    while (current) {
      total++;
      if (total === index) {
        node = current;
        break;
      }
      current = current.nextNode;
    }
    return node;
  }

  pop() {
    let current = this.head;

    if (!current) {
      return;
    }

    if (!current.nextNode) {
      this.head = null;
      return current;
    }

    while (current.nextNode.nextNode) {
      current = current.nextNode;
    }

    let poppedNode = current.nextNode;
    current.nextNode = null;
    return poppedNode;
  }

  contains(value) {
    let current = this.head;

    if (!current) {
      return false;
    }

    if (current.value === value) {
      return true;
    }

    while (current.nextNode) {
      current = current.nextNode;
      if (current.value === value) {
        return true;
      }
    }

    return false;
  }

  find(value) {
    let current = this.head;
    let index = 0;

    if (!current) {
      return -1;
    }

    if (current.value === value) {
      return index;
    }

    while (current.nextNode) {
      current = current.nextNode;
      index += 1;
      if (current.value === value) {
        return index;
      }
    }

    return -1;
  }
  toString() {
    let string = '(';
    let current = this.head;

    if (!current) {
      return '()';
    }

    string += current.value;

    while (current.nextNode) {
      string += ') -> (' + current.nextNode.value;
      current = current.nextNode;
    }

    string += ')';
    return string;
  }

  insertAt(value, index) {
    if (index < 0) {
      return false;
    }

    if (index === 0) {
      this.prepend(value);
      return true;
    }

    let current = this.head;
    let previous = null;
    let currentIndex = 0;

    while (current && currentIndex < index) {
      previous = current;
      current = current.nextNode;
      currentIndex++;
    }

    if (currentIndex < index) {
      return false;
    }

    const newNode = new Node(value);
    newNode.nextNode = current;

    if (previous) {
      previous.nextNode = newNode;
    } else {
      this.head = newNode;
    }

    return true;
  }

  removeAt(index) {
    if (index < 0 || index >= this.size()) {
      return null;
    }

    if (index === 0) {
      return this.pop();
    }

    let current = this.head;
    let previous = null;
    let currentIndex = 0;

    while (currentIndex < index) {
      previous = current;
      current = current.nextNode;
      currentIndex++;
    }

    previous.nextNode = current.nextNode;

    return current.value;
  }
}

class Node {
  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

// Creating a new linked list
const linkedList = new LinkedList();

// Appending elements to the linked list
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);

// Prepending an element to the linked list
linkedList.prepend(5);

// Printing the linked list
console.log(linkedList.toString()); // Output: (5) -> (10) -> (20) -> (30)

// Checking the size of the linked list
console.log('Size:', linkedList.size()); // Output: Size: 4

// Checking if the linked list contains a specific value
console.log('Contains 20:', linkedList.contains(20)); // Output: Contains 20: true

// Finding the index of a value in the linked list
console.log('Index of 20:', linkedList.find(20)); // Output: Index of 20: 2

// Inserting an element at a specific index
linkedList.insertAt(15, 2);

// Printing the updated linked list
console.log(linkedList.toString()); // Output: (5) -> (10) -> (15) -> (20) -> (30)

// Removing an element at a specific index
linkedList.removeAt(3);

// Printing the updated linked list
console.log(linkedList.toString()); // Output: (5) -> (10) -> (15) -> (30)
