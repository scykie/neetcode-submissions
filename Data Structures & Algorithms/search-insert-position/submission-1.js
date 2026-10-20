class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        let [l, r] = [0, nums.length];

        while (l < r) {
            const mid = Math.floor((l + r) / 2);
            if (nums[mid] < target) l = mid + 1;
            else r = mid;
        }

        return l;
    }
}
