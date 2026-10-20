class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const lower = s
            .toLowerCase()
            .split("")
            .filter((c) => (c >= "a" && c <= "z") || (c >= "0" && c <= "9"));

        let [l, r] = [0, lower.length - 1];

        while (l < r) {
            if (lower[l] !== lower[r]) return false;
            l++;
            r--;
        }

        return true;
    }
}
