
class MyCircularQueue {
    constructor(k) {
        this.size = k;
        this.head = { value: null, next: null, prev: null };
        this.tail = { value: null, next: null, prev: null };

        this.head.next = this.tail;
        this.tail.prev = this.head;

        this.len = 0;
    }

    enQueue(value) {
        if (this.len >= this.size) return false;

        const node = {
            value,
            next: this.tail,
            prev: this.tail.prev
        };

        this.tail.prev.next = node;
        this.tail.prev = node;

        this.len++;
        return true;
    }

    deQueue() {
        if (this.len === 0) return false;

        const node = this.head.next;

        this.head.next = node.next;
        node.next.prev = this.head;

        node.next = null;
        node.prev = null;

        this.len--;
        return true;
    }

    Front() {
        return this.len === 0 ? -1 : this.head.next.value;
    }

    Rear() {
        return this.len === 0 ? -1 : this.tail.prev.value;
    }

    isEmpty() {
        return this.len === 0;
    }

    isFull() {
        return this.len === this.size;
    }
}
