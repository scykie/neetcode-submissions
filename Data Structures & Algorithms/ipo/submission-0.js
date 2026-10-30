class Solution {
    /**
     * @param {number} k
     * @param {number} w
     * @param {number[]} profits
     * @param {number[]} capital
     * @return {number}
     */
    findMaximizedCapital(k, w, profits, capital) {
        const maxProfit = new MaxPriorityQueue();
        const minCost = new MinPriorityQueue((a) => a[0]);

        for (let i = 0; i < capital.length; i++) {
            minCost.enqueue([capital[i], profits[i]]);
        }

        for (let i = 0; i < k; i++) {

            // Move all currently affordable projects.
            while (!minCost.isEmpty() && minCost.front()[0] <= w) {
                const [c, p] = minCost.dequeue();
                maxProfit.enqueue(p);
            }

            // No project is affordable.
            if (maxProfit.isEmpty()) break;

            // Select the project with maximum profit.
            w += maxProfit.dequeue();
        }

        return w;
    }
}