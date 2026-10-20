class MaxStack {
    constructor() {
        this.stack = []
        this.maxStack = []
        this.count = 0
    }
    

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        const elem = [this.count, x]

        this.stack.push(elem)
        this.maxStack.push(elem)

        this.maxStack.sort((a, b) => a[1] - b[1] || a[0] - b[0])

        this.count++
    }

    /**
     * @return {number}
     */
    pop() {
        const [idx, val] = this.stack.pop()
        
        let [left, right] = [0, this.maxStack.length]
        while(left < right){
            const mid = Math.floor((left + right)/2)
            if(this.maxStack[mid][1] === val){
                // remove
                this.maxStack.splice(mid,1)
                break
            }

            if(this.maxStack[mid][1] > val){
                right = mid
            }else left = mid+1
        }

        return val
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length-1][1]
    }

    /**
     * @return {number}
     */
    peekMax() {
        return this.maxStack[this.maxStack.length-1][1]

    }

    /**
     * @return {number}
     */
    popMax() {
        const [idx, val] = this.maxStack.pop()

        let [left, right] = [0, this.stack.length]
        while(left < right){
            const mid = Math.floor((left + right)/2)
            if(this.stack[mid][0] === idx){
                // remove
                this.stack.splice(mid,1)
                break
            }

            if(this.stack[mid][0] > idx){
                right = mid
            }else left = mid+1
        }

        return val
    }
}

/**
 * Your MaxStack object will be instantiated and called as such:
 * var obj = new MaxStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.peekMax()
 * var param_5 = obj.popMax()
 */
