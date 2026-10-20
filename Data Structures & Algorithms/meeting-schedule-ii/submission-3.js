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
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        let count = 0;
        let rooms = 0;

        const start = [];
        const end = [];

        for(let itr of intervals){
            start.push(itr.start);
            end.push(itr.end)
        }

        start.sort((a,b)=>b-a)
        end.sort((a,b)=>b-a)

        while(start.length || end.length){
            if(start[start.length - 1] < end[end.length-1]){
                start.pop()
                count++
            }else{
                end.pop()
                count--
            }
            rooms = Math.max(rooms, count)
        }
        
        return rooms
    }
}
