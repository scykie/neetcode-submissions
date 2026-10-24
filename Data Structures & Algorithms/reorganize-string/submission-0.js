class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    reorganizeString(s) {
        const counts = {};

        // Step 1: Count character frequencies.
        for (const ch of s) {
            counts[ch] = (counts[ch] || 0) + 1;
        }

        // Step 2: Build the max-heap.
        const maxQ = new MaxPriorityQueue((item) => item[1]);

        for (const [ch, count] of Object.entries(counts)) {
            maxQ.enqueue([ch, count]);
        }

        let res = "";
        let prev = null;

        // Step 3: Greedily choose the most frequent available character.
        while (maxQ.size() > 0) {
            const [ch, count] = maxQ.dequeue();

            res += ch;

            // The previously used character becomes available again.
            if (prev !== null) {
                maxQ.enqueue(prev);
                prev = null;
            }

            // Keep the current character blocked for the next turn.
            if (count > 1) {
                prev = [ch, count - 1];
            }
        }

        // A character still blocked means it cannot be placed.
        return prev !== null ? "" : res;
    }
}
