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
     * @param {number} target
     * @return {TreeNode}
     */
    removeLeafNodes(root, target) {
        function dfs(node) {
            if (!node) return null;
            const l = dfs(node.left);
            const r = dfs(node.right);

            if (!l && !r && node.val === target) return null;
            node.left = l;
            node.right = r;

            return node;
        }

        return dfs(root)
    }
}
