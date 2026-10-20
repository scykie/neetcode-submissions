class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let max = 0;
        const set = new Set(nums);

        for (let num of nums) {
            let count = 1;
            if (set.has(num - 1)) continue;
            while (set.has(num + 1)) {
                count++;
                num++;
            }
            max = Math.max(count, max);
        }
        return max;
    }
}
