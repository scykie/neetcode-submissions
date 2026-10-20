class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const maxDeque = [];
        let l = 0;
        const res = [];
        for (let r = 0; r < nums.length; r++) {
            let num = nums[r];
            while (maxDeque.length && maxDeque[maxDeque.length - 1] < num) {
                maxDeque.pop();
            }
            maxDeque.push(num);
            if (r - l + 1 >= k) {
                res.push(maxDeque[0]);
                if (nums[l] === maxDeque[0]) {
                    maxDeque.shift();
                }
                l++;
            }
        }

        return res;
    }
}
