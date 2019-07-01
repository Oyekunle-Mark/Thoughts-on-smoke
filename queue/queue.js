function createQueue() {
  const queue = [];

  return {
    enqueue(item) {
      queue.unshift(item);
    },
    dequeue() {
      queue.pop();
    },
    peek() {
      return queue[queue.length - 1];
    },
    get length() {
      return queue.length;
    },
    isEmpty() {
      return queue.length === 0;
    },
  };
}

const list = createQueue();

console.log(list.isEmpty());

list.enqueue('Code all day long');
list.enqueue('Grow up to be a dull boy');
list.enqueue('Code to have fun');

console.log(list.peek());

list.dequeue();

console.log('TCL: list.peek()', list.peek());

list.dequeue();
list.dequeue();

console.log('TCL: list.peek()', list.isEmpty());
