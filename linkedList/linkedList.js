class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    const node = new Node(element);
    let currentNode;

    if (this.head === null) this.head = node;
    else {
      currentNode = this.head;

      while (currentNode.next) currentNode = currentNode.next;

      currentNode.next = node;
    }

    this.size++;
  }

  insertAt(element, index) {
    if (index > 0 && index > this.size) return false;

    const node = new Node(element);
    let currentNode = this.head;
    let previousNode;

    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let position = 0;

      while (position < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        position++;
      }

      node.next = currentNode;
      previousNode.next = node;
    }

    this.size++;
  }

  removeFrom(index) {
    if (index > 0 && index > this.size) return false;

    let position;
    let currentNode = this.head;
    let previousNode = currentNode;

    if (index === 0) this.head = currentNode.next;
    else {
      while (position < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        position++;
      }

      previousNode.next = currentNode;
    }

    this.size--;

    return currentNode.element;
  }

  removeElement(element) {
    let currentNode = this.head;
    let previousNode = null;

    while (currentNode !== null) {
      if (currentNode.element === element) {
        if (previousNode === null) this.head = currentNode.next;
        else previousNode.next = currentNode.next;

        this.size--;
        return currentNode.element;
      }

      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    return false;
  }

  indexOf(element) {
    let position = 0;
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.element === element) return position;

      currentNode = currentNode.next;
      position++;
    }

    return false;
  }

  isEmpty() {
    return this.size === 0;
  }

  size() {
    return this.size;
  }
}

const linkedList = new LinkedList();

console.log(linkedList.isEmpty());
linkedList.add(5);
console.log(linkedList.isEmpty());
linkedList.add(7);
linkedList.add(9);
console.log(linkedList.size);
linkedList.removeElement(7);
console.log(linkedList.size);
