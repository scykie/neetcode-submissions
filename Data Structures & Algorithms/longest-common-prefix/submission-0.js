class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let res = "";
        let temp = "";

        for (let i = 0; i < strs[0].length; i++) {
            temp += strs[0][i];
            for (let str of strs) {
                if (!str.includes(temp)) return res;
            }
            res = temp;
        }

        return res;
    }
}
