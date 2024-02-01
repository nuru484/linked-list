// Node class represents a single node in the linked list
class Node {
  constructor(value, nextNode = null) {
    this.value = value; // Value stored in the node
    this.nextNode = nextNode; // Reference to the next node in the sequence
  }
}

// LinkedList class represents the linked list data structure
class LinkedList {
  constructor() {
    this.headNode = null; // Reference to the first node in the list (head)
  }

  // Append a new node with the given value to the end of the list
  append(value) {
    const newNode = new Node(value);

    if (!this.headNode) {
      this.headNode = newNode; // If list is empty, new node becomes the head
      return;
    }

    let current = this.headNode;
    while (current.nextNode) {
      current = current.nextNode; // Traverse the list until the last node
    }
    current.nextNode = newNode; // Append the new node at the end
  }

  // Prepend a new node with the given value to the beginning of the list
  prepend(value) {
    const newNode = new Node(value, this.headNode); // New node points to the current head
    this.headNode = newNode; // New node becomes the head of the list
  }

  // Get the number of nodes in the list
  size() {
    let total = 0;
    let current = this.headNode;

    while (current) {
      total++;
      current = current.nextNode; // Traverse the list
    }
    return total;
  }

  // Get the first node in the list
  getHead() {
    return this.headNode;
  }

  // Get the last node in the list
  tail() {
    let last = null;
    let current = this.headNode;

    while (current) {
      if (current.nextNode === null) {
        last = current;
      }
      current = current.nextNode; // Traverse the list
    }
    return last;
  }

  // Get the node at the specified index
  at(index) {
    let node = null;
    let total = 0;
    let current = this.headNode;

    while (current) {
      total++;
      if (total === index) {
        node = current;
        break;
      }
      current = current.nextNode; // Traverse the list until reaching the index
    }
    return node;
  }

  // Remove and return the last node from the list
  pop() {
    let current = this.headNode;

    if (!current) {
      return;
    }

    if (!current.nextNode) {
      this.headNode = null; // If only one node, set head to null
      return current;
    }

    while (current.nextNode.nextNode) {
      current = current.nextNode; // Traverse the list until the second-to-last node
    }

    let poppedNode = current.nextNode;
    current.nextNode = null; // Remove the last node from the list
    return poppedNode;
  }

  // Check if the list contains a node with the given value
  contains(value) {
    let current = this.headNode;

    if (!current) {
      return false; // If list is empty, return false
    }

    if (current.value === value) {
      return true; // If head node matches the value, return true
    }

    while (current.nextNode) {
      current = current.nextNode;
      if (current.value === value) {
        return true; // Traverse the list until finding the value
      }
    }

    return false;
  }

  // Find the index of the first occurrence of the node with the given value
  find(value) {
    let current = this.headNode;
    let index = 0;

    if (!current) {
      return -1; // If list is empty, return -1
    }

    if (current.value === value) {
      return index; // If head node matches the value, return its index
    }

    while (current.nextNode) {
      current = current.nextNode;
      index += 1;
      if (current.value === value) {
        return index; // Traverse the list until finding the value and return its index
      }
    }

    return -1; // Return -1 if value is not found in the list
  }

  // Convert the list to a string representation
  toString() {
    let string = '(';
    let current = this.headNode;

    if (!current) {
      return '()'; // If list is empty, return empty string
    }

    string += current.value;

    while (current.nextNode) {
      string += ') -> (' + current.nextNode.value;
      current = current.nextNode; // Traverse the list to append each node's value
    }

    string += ')';
    return string;
  }

  // Insert a new node with the given value at the specified index
  insertAt(value, index) {
    if (index < 0) {
      return false; // Return false for invalid index
    }

    if (index === 0) {
      this.prepend(value); // If index is 0, prepend the value
      return true;
    }

    let current = this.headNode;
    let previous = null;
    let currentIndex = 0;

    while (current && currentIndex < index) {
      previous = current;
      current = current.nextNode;
      currentIndex++;
    }

    if (currentIndex < index) {
      return false; // If index is out of bounds, return false
    }

    const newNode = new Node(value);
    newNode.nextNode = current;

    if (previous) {
      previous.nextNode = newNode; // Insert the new node at the specified index
    } else {
      this.headNode = newNode;
    }

    return true;
  }

  // Remove and return the node at the specified index
  removeAt(index) {
    if (index < 0 || index >= this.size()) {
      return null; // Return null for invalid index
    }

    if (index === 0) {
      return this.pop(); // If index is 0, remove the first node
    }

    let current = this.headNode;
    let previous = null;
    let currentIndex = 0;

    while (currentIndex < index) {
      previous = current;
      current = current.nextNode;
      currentIndex++;
    }

    previous.nextNode = current.nextNode; // Remove the node at the specified index

    return current.value;
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
