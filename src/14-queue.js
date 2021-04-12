class Queue {
  constructor() {
    this.arrayQueue = [];
  }

  get size() {
    return this.arrayQueue.lenght;
  }

  enqueue(element) {
    ListNode(element);
    this.arrayQueue.push(element);
    return this;
  }

  dequeue() {
    return this.arrayQueue.shift();
  }
}

module.exports = Queue;
