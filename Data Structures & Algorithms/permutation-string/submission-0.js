class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const map1 = {};
        const map2 = {};
        let l = 0;

        for (let s of s1) {
            map1[s] = (map1[s] || 0) + 1;
        }

        for (let r = 0; r < s2.length; r++) {
            if (r - l + 1 === s1.length) {
                if (
                    s1.split("").sort().join("") ===
                    s2
                        .slice(l, r + 1)
                        .split("")
                        .sort()
                        .join("")
                )
                    return true;

                l++;
            }
        }
        return false;
    }
}
