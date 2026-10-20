class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let stack = [];
        let res = 0;

        for (let op of operations) {
            console.log(res);
            if (op === "+") {
                let evl = stack[stack.length - 1] + stack[stack.length - 2];
                res += evl;
                stack.push(evl);
            } else if (op === "C") {
                let evl = stack.pop();
                res -= evl;
            } else if (op === "D") {
                let evl = stack[stack.length-1] * 2;
                res += evl;
                stack.push(evl);
            } else {
                let evl = parseInt(op);
                res += evl;
                stack.push(evl);
            }
        }

        return res;
    }
}
