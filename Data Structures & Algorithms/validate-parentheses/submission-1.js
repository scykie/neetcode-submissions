class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const map = {
            ")": "(",
            "}": "{",
            "]": "[",
        };
        for (let ch of s) {
            console.log(stack)
            if (map[ch] && map[ch] === stack[0]) stack.shift();
            else stack.unshift(ch);
        }

        return !stack.length;
    }
}
