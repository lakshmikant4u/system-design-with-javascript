/**
 
Operations  enqueue	dequeue	traverse
Complexity	O(1)	O(1)	O(n)

 */
import LinkedList from '../utility/SingleLinkedList';

class Queue {
    constructor() {
        this.linkedList = new LinkedList();
    }
    isEmpty() {
        return !this.linkedList.head;
    }
    peek() {
        if (!this.linkedList.head) {
            return null;
        }

        return this.linkedList.head.value;
    }
    enqueue(value) {
        this.linkedList.append(value);
    }
    dequeue() {
        let deleted = this.linkedList.DeleteHead();
        return deleted ? deleted.value : null;
    }
}

let queue = new Queue();
queue.enqueue(10)
console.log(queue.peek())