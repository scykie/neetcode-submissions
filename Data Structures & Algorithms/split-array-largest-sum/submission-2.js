class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    splitArray(nums, k) {
        let l = Math.max(...nums);
        let r = nums.reduce((sum, c) => sum + c, 0);

        function countSplit(largest){
            let n = 1
            let sum = 0
            for(let num of nums){
                sum += num
                if(sum > largest){
                    sum = num
                    n++
                }
            }
            return n
        }

        while(l<r){
            let m = Math.floor((l+r)/2)
            if(countSplit(m) <= k){
                r = m
            }else{
                l = m+1
            }
        }

        return l
    }
}
