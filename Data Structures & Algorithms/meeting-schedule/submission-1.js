/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        // sort intervals 
        const sortedIntervals = intervals.sort((a, b)=>
            a.start - b.start
        )

        for(let i=1; i<intervals.length; i++){
            const [prev, cur] = [sortedIntervals[i-1], sortedIntervals[i]];
            if(prev.end > cur.start) return false
        }

        return true
    }
}
