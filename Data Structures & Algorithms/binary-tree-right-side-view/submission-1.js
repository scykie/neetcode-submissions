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
     * @return {number[]}
     */
    rightSideView(root) {
        if(!root) return []
        let res = [];
        let q = [root];

        while (q.length) {
            let len = q.length;
            res.push(q[len - 1].val);
            while (len) {
                len--;
                const node = q.shift();
                if (node.left) q.push(node.left);
                if (node.right) q.push(node.right);
            }
        }

        return res;
    }
}
