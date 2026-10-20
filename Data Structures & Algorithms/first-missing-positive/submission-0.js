class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        let res = 1
        let set = new Set()
        for(let num of nums){
            set.add(num)
            while(set.has(res)){
                res++
            }
        }
        return res
    }
}
