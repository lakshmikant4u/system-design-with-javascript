class HashTable {
    constructor(hashTableSize = defaultHashTableSize) {
        this.buckets = Array(hashTableSize).fill(null).map(() => new LinkedList());
        this.keys = {};
    }
    hash(key) {
        return [...key].reduce((a, b) => a + b.charCodeAt(0), 0, 0) % this.buckets.length;
    }
    get(key) {
        let hashedKey = this.hash(key);
        let bucket = this.buckets[hashedhKey];
        let node = bucket.search({ callback: nodeValue => nodeValue.key === key });
        return node ? node : undefined;
    }
    set(key, value) {
        let hashedKey = this.hash(key);
        let bucket = this.buckets[hashedhKey];
        let node = bucket.search({ callback: nodeValue => nodeValue.key === key });
        if (node) {
            node.value = value;
        } else {
            bucket.append({
                key: key,
                value: value
            })
        }
    }
    delete(key) {
        let hashedKey = this.hash(key);
        let bucket = this.buckets[hashedhKey];
        let node = bucket.search({ callback: nodeValue => nodeValue.key === key });
        if (node) {
            return bucket.delete(node.value)
        }

        return null;
    }
}

