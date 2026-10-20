class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let map = {};
        let maxCount = 0;
        let l = 0;
        let max = 0;
        for (let r = 0; r < s.length; r++) {
            map[s[r]] = (map[s[r]] || 0) + 1;
            maxCount = Math.max(maxCount, map[s[r]]);
            while (r - l + 1 - maxCount > k) {
                map[s[l]] -= 1;
                l++;
            }
            max = Math.max(r - l + 1, max);
        }

        return max;
    }
}
