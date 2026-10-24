class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @param {number} c
     * @return {string}
     */
    longestDiverseString(a, b, c) {
        const maxQ = new MaxPriorityQueue((ch) => ch[1]);
        let res = "";

        if (a > 0) maxQ.enqueue(["a", a]);
        if (b > 0) maxQ.enqueue(["b", b]);
        if (c > 0) maxQ.enqueue(["c", c]);

        let prev = null;
        while (maxQ.size()) {
            let [ch, cnt] = maxQ.dequeue();
            res += ch;
            cnt--;

            if (prev) {
                maxQ.enqueue(prev);
            }

            prev = null;

            if (cnt > 0) {
                if (res[res.length - 2] === ch) prev = [ch, cnt];
                else maxQ.enqueue([ch, cnt]);
            }
        }

        return res;
    }
}
