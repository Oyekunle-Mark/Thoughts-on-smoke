class QueueItem {
  constructor(item, priority) {
    this.item = item;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(item, priority) {
    const queueItem = new QueueItem(item, priority);
    let contain = false;

    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].priority > queueItem.priority) {
        this.items.splice(i, 0, queueItem);
        contain = true;
        break;
      }
    }

    if (!contain) this.items.push(queueItem);
  }

  front() {
    if (this.isEmpty()) return 'Queue is empty.';

    return this.items[0];
  }

  rear() {
    if (this.isEmpty()) return 'Queue is empty.';

    return this.items[this.items.length - 1];
  }

  dequeue() {
    if (this.isEmpty()) return 'Empty';

    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const priorityQueue = new PriorityQueue();

console.log(priorityQueue.isEmpty());

priorityQueue.enqueue('Sumit', 2);
priorityQueue.enqueue('Gourav', 1);
priorityQueue.enqueue('Piyush', 1);
priorityQueue.enqueue('Sunny', 2);
priorityQueue.enqueue('Sheru', 3);

console.log(priorityQueue.rear());
console.log(priorityQueue.front());

priorityQueue.dequeue();
priorityQueue.dequeue();
priorityQueue.dequeue();

console.log(priorityQueue.rear());
