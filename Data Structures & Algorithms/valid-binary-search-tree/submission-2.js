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
     * @return {boolean}
     */
    isValidBST(root) {
        // The left subtree of every node contains only nodes with keys less than the node's key.
        // The right subtree of every node contains only nodes with keys greater than the node's key.
        // Both the left and right subtrees are also binary search trees.

        function isValidSubtree(node, min, max){
            if(!node) return true
            if(node.val <= min || node.val >= max) return false
            const left = isValidSubtree(node.left, min, node.val)
            const right = isValidSubtree(node.right, node.val, max)
            return left && right
        }

        return isValidSubtree(root, -Infinity, Infinity)
    }
}
