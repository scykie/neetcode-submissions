class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const charMaps = new Map();
        const result = [];

        for (let str of strs) {
            const key = str.split("").sort().join("");
            if (charMaps.has(key)) charMaps.set(key, [...charMaps.get(key), str]);
            else charMaps.set(key, [str]);
        }

        return Array.from(charMaps.values());
    }
}
