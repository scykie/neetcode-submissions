class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let ptr = 0;
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] !== nums[ptr]) {
                nums[ptr + 1] = nums[i];
                ptr++;
            }
        }

        return ptr + 1;
    }
}
