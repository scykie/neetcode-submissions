class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        if (x < 2) return x;

        let l = 1;
        let r = Math.floor(x / 2);

        while (l < r) {
            // Upper mid prevents infinite loop
            const m = Math.ceil((l + r) / 2);

            if (m * m <= x) {
                l = m;
            } else {
                r = m - 1;
            }
        }

        return l;
    }
}