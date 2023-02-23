/**

Complexity Analysis
O(1): append, prepend, deleteHead
O(n): insertAt, deleteAt, delete, search

 */

class Node {
    constructor(value = null, key = null) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    // O(1)
    append(value) {
        let node = new Node(value);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        }

        this.tail.next = node;
        this.tail = node;

        return this;
    }
    // O(1) 
    prepend(key, value) {
        const newNode = new Node(value, key);
        newNode.next = this.head
        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode;
        }
        return this;
    }
    // O(1) 
    deleteHead() {
        if (!this.head) {
            return null;
        }

        if (this.head.next) {
            this.head = this.head.next
        } else {
            this.head = null;
            this.tail = null;
        }

        return this;
    }
    // O(n)
    insertAt(index, value) {
        let cur = this.head;
        for (let i = 0; i < index - 1; i++) {
            cur = cur.next;
        }

        let node = new Node(value);
        node.next = cur.next;
        cur.next = node;
        return this;
    }
    // O(n) 
    deleteAt(index) {
        let cur = this.head;
        for (let i = 0; i < index - 1; i++) {
            cur = cur.next;
        }
        if (cur.next) {
            cur.next = cur.next.next;
        }

        return this;
    }
    // O(n) 
    delete(value) {
        if (!this.head) {
            return null;
        }
        // Check the head node if the value is the target value
        if (this.head.value === value) {
            return this.deleteHead();
        }

        // Check immediate node if the value is the target value
        let deletedNode = null;
        let cur = this.head;
        while (cur && cur.next) {
            if (cur.next.value === value) {
                deletedNode = cur.next;
                cur.next = cur.next.next;
            } else {
                cur = cur.next;
            }
        }

        // Check the tail node if the value is the target value
        if (this.tail.value === value) {
            deletedNode = this.tail;
            this.tail = null;
        }

        return deletedNode;
    }

    // O(n) 
    search({ value = undefined, callback = undefined }) {
        if (!this.head) {
            return null;
        }

        let cur = this.head
        while (cur) {
            if (callback && callback(cur.value)) {
                return currentNode;
            }

            if (cur.value === value) {
                return cur
            }
            cur = cur.next
        }

        return null;
    }

    //O(n) 
    moveToFront(node) {
        let currentNode = this.head;
        while (currentNode && currentNode.next) {
            if (currentNode.next === node) {
                currentNode.next = currentNode.next.next;
                node.next = this.head
                this.head = node;
                return;
            }
            currentNode = currentNode.next;
        }
    }
}


