
class DoublyLinkedList {
    constructor() {
        this.length = 0;
        this.head = { key: null, value: null, freq: null, prev: null, next: null };
        this.tail = { key: null, value: null, freq: null, prev: null, next: null };

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
        this.length--;
    }

    addToTail(node) {
        node.prev = this.tail.prev;
        node.next = this.tail;

        this.tail.prev.next = node;
        this.tail.prev = node;

        this.length++;
    }

    removeHead() {
        if (this.length === 0) return null;

        const node = this.head.next;
        this.remove(node);
        return node;
    }
}

class LFUCache {
    constructor(capacity) {
        this.cap = capacity;
        this.size = 0;
        this.minFreq = 0;
        this.freq = new Map();
        this.cache = new Map();
    }

    get(key) {
        if (!this.cache.has(key)) return -1;

        const node = this.cache.get(key);

        this.freq.get(node.freq).remove(node);

        if (node.freq === this.minFreq &&
            this.freq.get(node.freq).length === 0) {
            this.minFreq++;
        }

        node.freq++;

        if (!this.freq.has(node.freq)) {
            this.freq.set(node.freq, new DoublyLinkedList());
        }

        this.freq.get(node.freq).addToTail(node);

        return node.value;
    }

    put(key, value) {
        if (this.cap === 0) return;

        // Existing key
        if (this.cache.has(key)) {
            const node = this.cache.get(key);
            node.value = value;

            this.freq.get(node.freq).remove(node);

            if (node.freq === this.minFreq &&
                this.freq.get(node.freq).length === 0) {
                this.minFreq++;
            }

            node.freq++;

            if (!this.freq.has(node.freq)) {
                this.freq.set(node.freq, new DoublyLinkedList());
            }

            this.freq.get(node.freq).addToTail(node);

            return;
        }

        // Evict LFU node if capacity is full
        if (this.size >= this.cap) {
            const list = this.freq.get(this.minFreq);
            const removed = list.removeHead();

            this.cache.delete(removed.key);
            this.size--;
        }

        // Insert new node
        const node = {
            key,
            value,
            freq: 1,
            prev: null,
            next: null
        };

        if (!this.freq.has(1)) {
            this.freq.set(1, new DoublyLinkedList());
        }

        this.freq.get(1).addToTail(node);
        this.cache.set(key, node);

        this.minFreq = 1;
        this.size++;
    }
}
