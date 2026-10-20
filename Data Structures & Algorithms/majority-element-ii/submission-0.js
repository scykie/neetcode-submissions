class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        const set = new Set();
        const count = {};

        for (let num of nums) {
            count[num] = (count[num] || 0) + 1;
            if (count[num] > nums.length / 3) set.add(num);
        }

        return Array.from(set);
    }
}
