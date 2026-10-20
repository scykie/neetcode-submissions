class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;

        function binarySearch(l, r) {
            while (l <= r) {
                const m = Math.floor((l + r) / 2);
                if (nums[m] === target) return m;
                if (nums[m] < target) l = m + 1;
                else r = m - 1;
            }
        }

        while (l < r) {
            let mid = Math.floor((l + r) / 2);
            // if middle element greater than the right most
            if (nums[mid] > nums[r]) {
                l = mid + 1;
            } else r = mid;
        }

        return binarySearch(0, l - 1) ?? binarySearch(l, nums.length - 1) ?? -1;
    }
}
