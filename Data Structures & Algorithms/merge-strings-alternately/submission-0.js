class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let res = "";
        let i=0
        while (i < word1.length && i < word2.length) {
            res += word1[i] + word2[i];
            i++
        }
        while(i < word1.length){
            res+=word1[i]
            i++
        }
        while(i < word2.length){
            res+=word2[i]
            i++
        }

        return res
    }
}
