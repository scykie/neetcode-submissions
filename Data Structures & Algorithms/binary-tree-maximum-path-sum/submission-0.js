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
     * @return {number}
     */
    maxPathSum(root) {
        // best path cases
        // left subtree
        // right subtree
        // both subtree
        let max = -Infinity;
        function dfs(node) {
            if (!node) return 0;
            const l = Math.max(dfs(node.left), 0);
            const r = Math.max(dfs(node.right), 0);
            const v = node.val;

            max = Math.max(max, l + r + v);

            return v + Math.max(l, r);
        }

        dfs(root);
        return max;
    }
}
