class MedianFinder {
    constructor() {
        this.min = new MinPriorityQueue();
        this.max = new MaxPriorityQueue();
    }

    addNum(num) {
        // Step 1: Insert into max heap
        this.max.enqueue(num);

        // Step 2: Move the largest element of max to min
        this.min.enqueue(this.max.dequeue());

        // Step 3: Balance the heaps
        if (this.min.size() > this.max.size()) {
            this.max.enqueue(this.min.dequeue());
        }
    }

    findMedian() {
        if (this.max.size() > this.min.size()) {
            return this.max.front();
        }

        return (this.max.front() + this.min.front()) / 2;
    }
}