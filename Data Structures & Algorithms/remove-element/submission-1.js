class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let l = 0;
        let r = nums.length - 1;

        while (l <= r) {
            if (nums[l] === val) {
                [nums[l], nums[r]] = [nums[r], nums[l]];
                r--;
            } else {
                l++;
            }
        }

        return l;
    }
}
