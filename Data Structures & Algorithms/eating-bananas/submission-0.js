class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let r = Math.max(...piles);
        let l = 0;

        function getHours(n) {
            let hours = 0;
            for (let pile of piles) {
                hours += Math.ceil(pile / n);
            }
            return hours;
        }

        while (l < r) {
            let m = Math.floor((l + r) / 2);
            const hours = getHours(m);
            if (hours <= h) r = m;
            else l = m + 1;
        }

        return l;
    }
}
