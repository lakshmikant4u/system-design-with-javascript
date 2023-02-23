class Stack {
    constructor() {
        this.linkedList = new LinkedList();
    }
    isEmpty() {
        return !this.linkedList.head;
    }
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.linkedList.head.value;
    }
    push(value) {
        this.linkedList.prepend(value)
    }
    pop() {
        let deleted = this.linkedList.deleteHead();
        return deleted ? deleted.value : null
    }
}