// https://medium.com/a-layman/practicing-system-design-in-javascript-cache-system-and-the-shortest-path-for-graph-9e0408687f5f

class Cache {
    constructor(cacheSize = defaultCacheSize) {
        this.cacheSize = cacheSize;
        this.map = new HashTable();
        this.linkedList = new LinkedList();
        this.size = 0;
    }

    getResults(key) {
        // Get value from the hash table: O(1)
        let node = this.map.get(key)
        if (node != undefined) {
            // Move the fresh item to the front: O(n)
            this.linkedList.moveToFront(node)
            return node;
        }
        return null;
    }

    insertResults(key, value) {
        // Update the node 
        // Get value from the hash table: O(1)
        let node = this.map.get(key)
        if (node != undefined) {
            node.val = value;
            // Move the fresh item to the front: O(n)
            this.linkedList.moveToFront(node)
            return;
        }
        // Insert the node: O(1)
        this.linkedList.preppend(key, value);
        this.map.set(key, value);
        this.size = this.size + 1;

        // Remove the last node of the Linked list: O(1)
        if (this.size > this.cacheSize) {
            // O(1)
            this.map.delete(this.linkedList.tail.key)
            // O(1)
            this.linkedList.delete(this.linkedList.tail.val);
        }
    }
}

