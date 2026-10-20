class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let tMap = {};
        let sMap = {};
        for (let ch of t) {
            tMap[ch] = (tMap[ch] || 0) + 1;
        }

        let have = 0;
        let need = Object.keys(tMap).length;
        let l = 0;

        let best = "";

        for (let i = 0; i < s.length; i++) {
            sMap[s[i]] = (sMap[s[i]] || 0) + 1;
            if (tMap[s[i]] && sMap[s[i]] === tMap[s[i]]) have++;

            while (have === need) {
                if (best === "" || best.length > i - l + 1) best = s.slice(l, i + 1);
                sMap[s[l]] -= 1;
                if (tMap[s[l]] && sMap[s[l]] < tMap[s[l]]) have--;
                l++;
            }
        }

        return best;
    }
}
