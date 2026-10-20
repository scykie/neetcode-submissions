class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people.sort((a, b) => a - b);
        let [l, r] = [0, people.length - 1];
        let count = 0;
        while (l <= r) {
            const sum = people[l] + people[r];
            if (sum > limit) {
                r--;
            } else {
                r--;
                l++;
            }
            count++;
        }
        return count;
    }
}
