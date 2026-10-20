class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        const prefixCount = { 0: 1 };

        let sum = 0;
        let count = 0;

        for (const num of nums) {
            sum += num;

            // Previous prefix sum needed
            const required = sum - k;

            count += prefixCount[required] || 0;

            // Store current prefix sum
            prefixCount[sum] = (prefixCount[sum] || 0) + 1;
        }

        return count;
    }
}