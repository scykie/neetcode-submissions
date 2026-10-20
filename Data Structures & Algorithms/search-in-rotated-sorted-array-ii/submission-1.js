class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {boolean}
     */
    search(nums, target) {
        let [l, r] = [0, nums.length - 1];

        while (l <= r) {
            const m = Math.floor((l + r) / 2);

            if (target === nums[m]) return true;

            // handle repeated values case
            if (nums[m] === nums[l]) {
                l++;
                continue;
            }

            if (nums[m] === nums[r]) {
                r--;
                continue;
            }

            // check if left sorted portion
            if (nums[l] <= nums[m]) {
                // check if the target is in the portion
                if (target < nums[m] && target > nums[l]) r = m - 1;
                else l = m + 1;
            } else {
                if (target < nums[r] && target > nums[m]) l = m + 1;
                else r = m - 1;
            }
        }

        return false;
    }
}
