class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // bucket sort
        const count = {};
        for (let num of nums) {
            if (count[num]) count[num] += 1;
            else count[num] = 1;
        }

        const buckets = Array.from({ length: nums.length + 1 }, () => []);
        for (let key of Object.keys(count)) {
            buckets[count[key]].push(key);
        }

        const res = [];
        for (let i = buckets.length - 1; i > 0; i--) {
            for (const n of buckets[i]) {
                res.push(n);
                if (res.length === k) {
                    return res;
                }
            }
        }

        return res
    }
}
