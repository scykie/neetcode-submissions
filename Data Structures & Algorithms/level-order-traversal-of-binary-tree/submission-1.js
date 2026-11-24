/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root) return []
        const res = [];
        let stack = [root];
        while (stack.length) {
            const lvl = [];
            const visited = [];
            for (let node of stack) {
                visited.push(node.val);
                if (node.left) lvl.push(node.left);
                if (node.right) lvl.push(node.right);
            }
            stack = lvl
            res.push(visited);
        }

        return res;
    }
}
