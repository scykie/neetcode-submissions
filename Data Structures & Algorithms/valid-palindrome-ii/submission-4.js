class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s, k = 1) {
        let [l, r] = [0, s.length - 1];

        while (l < r) {
            if (s[l] !== s[r]) {
                if (k) {
                    k--;
                    return this.validPalindrome(s.slice(l + 1, r+1), k) || this.validPalindrome(s.slice(l, r), k);
                } else return false;
            }
            l++;
            r--;
        }

        return true;
    }
}
