class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const minQ = new MinPriorityQueue()

        for(let num of nums){
            minQ.enqueue(num)

            if(minQ.size()>k) minQ.dequeue()
        }

        return minQ.front()
    }
}
