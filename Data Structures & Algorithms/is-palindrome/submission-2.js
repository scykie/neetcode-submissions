class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // All this can be done in one pass also
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
