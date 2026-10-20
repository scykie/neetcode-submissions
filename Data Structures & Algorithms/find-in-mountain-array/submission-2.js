/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * class MountainArray {
 *     @param {number} index
 *     @return {number}
 *     get(index) {
 *         ...
 *     }
 *
 *     @return {number}
 *     length() {
 *         ...
 *     }
 * }
 */

class Solution {
    /**
     * @param {number} target
     * @param {MountainArray} mountainArr
     * @return {number}
     */
    findInMountainArray(target, arr) {
        const length = arr.length();

        let [l, r] = [0, length - 2];
        let peak = 0;

        // search peak
        while (l <= r) {
            const m = Math.floor((l + r) / 2);
            const left = arr.get(m - 1);
            const right = arr.get(m + 1);
            const mid = arr.get(m);

            if (mid > right && mid > left) {
                peak = m;
                break;
            }

            if (mid < right) l = m+1;
            else r = m;
        }

        [l, r] = [0, peak - 1];

        while (l <= r) {
            const m = Math.floor((l + r) / 2);
            const mid = arr.get(m);

            if (mid === target) return m;

            if (mid < target) l = m + 1;
            else r = m - 1;
        }

        [l, r] = [peak, length - 1];

        while (l <= r) {
            const m = Math.floor((l + r) / 2);
            const mid = arr.get(m);

            if (mid === target) return m;

            if (mid < target) r = m - 1;
            else l = m + 1;
        }

        return -1;
    }
}
