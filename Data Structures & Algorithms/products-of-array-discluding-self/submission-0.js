class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefix = [];
        const suffix = [];

        let prod = 1;

        for (let i = 0; i < nums.length; i++) {
            prefix[i] = prod;
            prod *= nums[i];
        }

        prod = 1;
        for (let i = nums.length - 1; i > -1; i--) {
            suffix[i] = prod;
            prod *= nums[i];
        }

        const res = [];
        for (let i = 0; i < nums.length; i++) {
            res[i] = prefix[i] * suffix[i];
        }

        return res;
    }
}
