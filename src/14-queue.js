// const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  get size() {
    return this.length;
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
    this.length++;
  }

  dequeue() {
    let currentNode = this.head;
    if (currentNode) {
      const val = currentNode.value;
      currentNode = currentNode.next;
      this.head = currentNode;
      this.length--;
      return val;
    }
    return null;
  }
}

module.exports = Queue;
