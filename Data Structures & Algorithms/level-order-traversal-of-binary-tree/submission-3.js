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
        if (!root) return [];
        const res = [];
        let q = [root];
        while (q.length) {
            const lvl = [];
            const len = q.length;
            for (let i = 0; i < len; i++) {
                const node = q.shift();
                lvl.push(node.val);
                if (node.left) q.push(node.left);
                if (node.right) q.push(node.right);
            }
            res.push(lvl);
        }

        return res;
    }
}
