class Queue {
  constructor() {
    this.count = 0;
    this.head = null;
  }

  get size() {
    return this.count;
  }

  enqueue(element) {
    const newNode = new ListNode(element);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    this.count++;
  }

  dequeue() {
    let currentNode = this.head;
    if (currentNode) {
      const val = currentNode.value;
      currentNode = currentNode.next;
      this.head = currentNode;
      this.count--;
      return val;
    }
    return null;
  }
}

module.exports = Queue;
