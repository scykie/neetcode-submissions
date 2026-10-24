class Solution {
    /**
     * @param {number[][]} trips
     * @param {number} capacity
     * @return {boolean}
     */
    carPooling(trips, capacity) {
        let p = 0
        const pQ = new MinPriorityQueue(p=>p[0])
        const dQ = new MinPriorityQueue(d=>d[0])

        for(let [p, pup, drp] of trips){
            pQ.enqueue([pup, p])
            dQ.enqueue([drp, p])
        }

        while(pQ.size() && dQ.size()){
            if(pQ.front()[0] < dQ.front()[0]){
                p += pQ.dequeue()[1]
            }else{
                p -= dQ.dequeue()[1]
            }

            if(p > capacity) return false
        }

        return true

    }
}
