class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temps) {
        const stack = [];
        const res = Array(temps.length).fill(0);

        for (let i = 0; i < temps.length; i++) {
            while (stack.length && temps[stack[0]] < temps[i]) {
                const idx = stack.shift();
                res[idx] = i - idx;
            }

            stack.unshift(i);
        }

        return res;
    }
}
