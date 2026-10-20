class StockSpanner {
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} price
     * @return {number}
     */
    next(price) {
        let count = 1;
        while (this.stack.length && this.stack[0][0] <= price) {
            count += this.stack.shift()[1];
        }
        this.stack.unshift([price, count]);

        return count;
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
