class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        const counts = [];
        const strings = [];

        let current = "";
        let digit = 0;

        for (const ch of s) {
            if (ch >= "0" && ch <= "9") {
                digit = digit * 10 + Number(ch);
            } else if (ch === "[") {
                counts.push(digit);
                strings.push(current);

                digit = 0;
                current = "";
            } else if (ch === "]") {
                const count = counts.pop();
                const previous = strings.pop();

                current = previous + current.repeat(count);
            } else {
                current += ch;
            }
        }

        return current;
    }
}
