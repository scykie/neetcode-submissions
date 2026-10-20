class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let [l, m, r] = [0, 0, nums.length - 1];

        while (m <= r) {
            if (nums[m] === 0) {
                [nums[l], nums[m]] = [nums[m], nums[l]];
                l++;
                m++;
            } else if (nums[m] === 1) {
                m++;
            } else {
                [nums[m], nums[r]] = [nums[r], nums[m]];
                r--;
            }
        }
    }
}
