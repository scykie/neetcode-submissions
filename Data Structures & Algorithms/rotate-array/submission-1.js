class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */

    _reverse(nums, i, j) {
        for (let left = i, right = j - 1; left < right; left++, right--) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
        }
    }

    rotate(nums, k) {
        const n = nums.length;
        if (n === 0) return;
        k = k % n;

        // reverse whole arr
        this._reverse(nums, 0, n);

        // reverse k
        this._reverse(nums, 0, k);

        // reverse remaining
        this._reverse(nums, k, n);
    }
}
