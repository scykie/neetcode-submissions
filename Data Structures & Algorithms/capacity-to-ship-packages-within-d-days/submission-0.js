class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let l = Math.max(...weights);
        let r = weights.reduce((sum, w) => sum + w, 0);
        function calcDays(w) {
            let day = 1;
            let cap = w;
            for (let weight of weights) {
                if (cap - weight < 0) {
                    cap = w;
                    day++;
                }
                cap -= weight;
            }

            return day;
        }

        while (l < r) {
            const m = Math.floor((l + r) / 2);
            const d = calcDays(m);
            if (d <= days) r = m;
            else l = m + 1;
        }

        return l;
    }
}
