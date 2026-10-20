class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let water = 0;
        let [l, r] = [0, height.length - 1];
        let [l_max, r_max] = [height[l], height[r]];

        while (l < r) {
            const min = Math.min(l_max, r_max);
            if (height[l] < height[r]) {
                water += min - height[l];
                l++;
                l_max = Math.max(height[l], l_max);
            } else {
                water += min - height[r];
                r--;
                r_max = Math.max(height[r], r_max);
            }
        }

        return water;
    }
}
