class MinStack {
    constructor() {
        this.stack = [];
        this.min = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        if (!this.min.length || this.min[this.min.length - 1] >= val) this.min.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        const popped = this.stack.pop();
        if (popped === this.min[this.min.length - 1]) this.min.pop();
        return popped;
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min[this.min.length - 1];
    }
}
