class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0;
        let [l, r] = [0, heights.length - 1];
        while (l < r) {
            let cur = Math.min(heights[l], heights[r]) * (r - l);
            if (heights[l] < heights[r]) l++;
            else r--;

            max = Math.max(cur, max);
        }
        return max;
    }
}
