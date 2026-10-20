class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        const values = this.keyStore.get(key) || [];
        values.push([timestamp, value]);
        this.keyStore.set(key, values);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const values = this.keyStore.get(key);
        if (!values) return "";
        let [l, r] = [0, values.length - 1];
        while (l <= r) {
            const m = Math.floor((l + r) / 2);

            if (values[m][0] <= timestamp) l = m + 1;
            else r = m - 1;
        }

        return r >= 0 ? values[r][1] : "";
    }
}
