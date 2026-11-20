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
    depth(node) {
        if (!node) return 0;
        return 1 + Math.max(this.depth(node.left), this.depth(node.right));
    }

    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        if (!root) return true;
        if (!this.isBalanced(root.left) || !this.isBalanced(root.right)) return false;
        return Math.abs(this.depth(root.left) - this.depth(root.right)) <= 1;
    }
}
