class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(item) {
    this.queue.unshift(item);
  }

  dequeue() {
    this.queue.pop();
  }

  peek() {
    return this.queue[this.queue.length - 1];
  }

  length() {
    return this.queue.length;
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

const list = new Queue();

console.log(list.isEmpty());

list.enqueue('Code all day long');
list.enqueue('Grow up to be a dull boy');
list.enqueue('Code to have fun');
list.enqueue('And be a fine sprightly lad.');

console.log(list.peek());

list.dequeue();

console.log('TCL: list.peek()', list.peek());

list.dequeue();
list.dequeue();

console.log('TCL: list.peek()', list.isEmpty());
console.log('TCL: list.length()', list.length());
