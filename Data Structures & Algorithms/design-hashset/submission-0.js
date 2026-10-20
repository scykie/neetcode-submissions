class MyHashSet {
    constructor() {
        this.map = {};
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        if (this.map[key]) return;
        this.map[key] = true;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        this.map[key] = false;
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        return this.map[key] || false;
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
