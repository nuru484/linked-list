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
}

class Node {
  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
