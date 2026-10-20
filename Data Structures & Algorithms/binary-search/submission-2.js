class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let [l, r] = [0, nums.length];

        while (l < r) {
            let mid = Math.floor((l + r) / 2);
            if (nums[mid] === target) return mid;
            if (nums[mid] < target) l = mid + 1;
            else r = mid;
        }

        return -1
    }
}
