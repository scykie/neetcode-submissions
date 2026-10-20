class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let [l, r] = [0, nums.length - 1];
        let res = nums[l];

        while (l <= r) {
            // if in sorted partition then l is min
            if (nums[l] <= nums[r]) {
                res = Math.min(res, nums[l]);
                break;
            }

            const m = Math.floor((l + r) / 2);
            res = Math.min(res, nums[m]);

            // if in left sorted partiotion, then move to right
            if (nums[m] >= nums[l]) l = m + 1;
            else r = m - 1;
        }

        return res;
    }
}
