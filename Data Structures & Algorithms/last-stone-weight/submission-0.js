class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const maxQ = new MaxPriorityQueue()
        
        for(let stone of stones){
            maxQ.enqueue(stone)
        }

        while(maxQ.size() > 1){
            let a = maxQ.dequeue()
            let b = maxQ.dequeue()

            if(a > b){
                maxQ.enqueue(a-b)
            }
        }

        return maxQ.front() ?? 0
    }
}
