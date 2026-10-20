class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const arr = []
        for(let i=0; i<speed.length; i++){
            const time = (target-position[i])/speed[i]
            arr.push([time, position[i]])
        }
        arr.sort((a,b)=>b[1]-a[1])

        const stack = []
        for(let [time, pos] of arr){
            if(!stack.length || stack[0] < time)stack.unshift(time)
        }

        return stack.length
    }
}
