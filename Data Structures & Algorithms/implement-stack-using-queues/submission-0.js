class MyStack {
    constructor() {
        this.a = []
        this.b = []
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.a.push(x)
        while(this.b.length){
            this.a.push(this.b.shift())
        }
        [this.a, this.b] = [this.b, this.a]
        console.log(this.a, this.b)
    }

    /**
     * @return {number}
     */
    pop() {
        return this.b.shift()
    }

    /**
     * @return {number}
     */
    top() {
        return this.b[0]
    }

    /**
     * @return {boolean}
     */
    empty() {
        return !this.b.length
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
