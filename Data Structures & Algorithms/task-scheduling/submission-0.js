class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const maxQ = new MaxPriorityQueue((t) => t[0]);
        const counts = {};
        let time = 0;
        const waiting = new Queue();

        for (let t of tasks) {
            counts[t] = (counts[t] || 0) + 1;
        }

        for (let t of Object.keys(counts)) {
            maxQ.enqueue([counts[t], t]);
        }

        while (maxQ.size() || waiting.size()) {
            time++
            if (maxQ.size()) {
                let [c, t] = maxQ.dequeue();
                c--
                if(c > 0)
                waiting.enqueue([time+n, [c, t]])
            }
            if(waiting.size() && waiting.front()[0] === time){
                maxQ.push(waiting.dequeue()[1])
            }
        }

        return time
    }
}
