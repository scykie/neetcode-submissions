
class LRUCache {
    constructor(capacity) {
        this.size = capacity;

        this.head = {
            key: null,
            value: null,
            prev: null,
            next: null
        };

        this.tail = {
            key: null,
            value: null,
            prev: null,
            next: null
        };

        this.head.next = this.tail;
        this.tail.prev = this.head;

        this.cache = new Map();
    }

    // Remove a node from the list
    remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    // Add node immediately before tail
    addToTail(node) {
        node.prev = this.tail.prev;
        node.next = this.tail;

        this.tail.prev.next = node;
        this.tail.prev = node;
    }

    get(key) {
        if (!this.cache.has(key)) return -1;

        const node = this.cache.get(key);

        // Move to most recently used position
        this.remove(node);
        this.addToTail(node);

        return node.value;
    }

    put(key, value) {
        // Update existing key
        if (this.cache.has(key)) {
            const node = this.cache.get(key);
            node.value = value;

            this.remove(node);
            this.addToTail(node);

            return;
        }

        // Evict least recently used node
        if (this.cache.size >= this.size) {
            const lru = this.head.next;

            this.remove(lru);
            this.cache.delete(lru.key);
        }

        // Insert new node
        const node = {
            key,
            value,
            prev: null,
            next: null
        };

        this.addToTail(node);
        this.cache.set(key, node);
    }
}
