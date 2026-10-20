class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let res = "";
        let i = 0;
        while (i < word1.length && i < word2.length) {
            res += word1[i] + word2[i];
            i++;
        }
        while (i < word1.length) {
            res += word1[i];
            i++;
        }
        while (i < word2.length) {
            res += word2[i];
            i++;
        }

        return res;


        let length = word1.length > word2.length ? word1.length : word2.length;
        let result = ''
        for (let i = 0; i < length;i++) {
            if (word1[i]) result += word1[i]
            if (word2[i]) result += word2[i]
        }
        return result
    }
}
