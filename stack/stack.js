class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (this.isEmpty()) return 'Stack is empty.';

    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  printStack() {
    return this.items.join(' ');
  }
}

const stack = new Stack();

console.log(stack.isEmpty());

stack.push(4);
stack.push(3);
stack.push(2);
stack.pop();

console.log('TCL: stack.printStack()', stack.printStack());
console.log(stack.peek());
