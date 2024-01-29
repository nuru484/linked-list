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

  head() {
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
}

class Node {
  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
