/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
        let [l,r] = [1, n]
        
        while(l <= r){
            const m = Math.floor((l+r)/2)
            if(guess(m) === 0) return m
            if(guess(m) > 0) l = m+1
            else r = m-1
        }
    }
}
