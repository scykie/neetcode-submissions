class Solution {
    /**
     * @param {number[][]} trips
     * @param {number} capacity
     * @return {boolean}
     */
    carPooling(trips, capacity) {
        let passengers = 0;

        // instead of 2 separate queues one Q can also be used; +/- pass
        const pQ = new MinPriorityQueue((p) => p[0]);
        const dQ = new MinPriorityQueue((d) => d[0]);

        for (const [p, pickup, dropoff] of trips) {
            pQ.enqueue([pickup, p]);
            dQ.enqueue([dropoff, p]);
        }

        while (pQ.size() > 0 || dQ.size() > 0) {
            if (pQ.size() > 0 && (dQ.size() === 0 || pQ.front()[0] < dQ.front()[0])) {
                passengers += pQ.dequeue()[1];
            } else {
                passengers -= dQ.dequeue()[1];
            }

            if (passengers > capacity) return false;
        }

        return true;
    }
}
