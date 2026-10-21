class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const maxQ = new MaxPriorityQueue((p)=>p[0])
        const res = []

        for(let [x,y] of points){
            const d = x**2 + y**2
            maxQ.enqueue([d, [x,y]])

            if(maxQ.size() > k) maxQ.dequeue()
        }

        while(maxQ.size()){
            res.push(maxQ.dequeue()[1])
        }
        
        return res
    }
}
