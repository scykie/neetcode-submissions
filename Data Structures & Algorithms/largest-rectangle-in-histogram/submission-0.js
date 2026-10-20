
class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const stack = [];
        let maxArea = 0;

        for (let i = 0; i < heights.length; i++) {
            let start = i;

            while (
                stack.length &&
                stack[stack.length - 1].height > heights[i]
            ) {
                const { height, index } = stack.pop();

                maxArea = Math.max(maxArea, height * (i - index));
                start = index;
            }

            stack.push({ height: heights[i], index: start });
        }

        while (stack.length) {
            const { height, index } = stack.pop();

            maxArea = Math.max(
                maxArea,
                height * (heights.length - index)
            );
        }

        return maxArea;
    }
}
