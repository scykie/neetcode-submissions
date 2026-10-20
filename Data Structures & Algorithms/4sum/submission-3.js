class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {
        nums.sort((a, b) => a - b);
        const res = [];

        for (let i = 0; i < nums.length - 3; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            for (let j = i + 1; j < nums.length - 2; j++) {
                if (j > i + 1 && nums[j] === nums[j - 1]) continue;
                let [l, r] = [j + 1, nums.length - 1];
                while (l < r) {
                    const sum = nums[i] + nums[j] + nums[l] + nums[r];

                    if (target - sum > 0) l++;
                    else if (sum - target > 0) r--;
                    else {
                        res.push([nums[i], nums[j], nums[l], nums[r]]);
                        l++;
                        r--;
                        // Skip duplicate third elements
                        while (l < r && nums[l] === nums[l - 1]) {
                            l++;
                        }

                        // Skip duplicate fourth elements
                        while (l < r && nums[r] === nums[r + 1]) {
                            r--;
                        }
                    }
                }
            }
        }

        return res;
    }
}
