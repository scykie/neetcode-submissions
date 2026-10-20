class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = "";
        for (let str of strs) {
            encoded = encoded + str.length + "#" + str;
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const strs = [];

        while (str.length) {
            const delimiterIndex = str.indexOf("#");

            const charCount = Number(str.slice(0, delimiterIndex));

            strs.push(str.slice(delimiterIndex + 1, delimiterIndex + 1 + charCount));

            str = str.slice(delimiterIndex + 1 + charCount);
        }

        return strs;
    }
}
