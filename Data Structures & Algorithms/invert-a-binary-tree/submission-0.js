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
     * @return {TreeNode}
     */
    invertTree(root) {
        function invert(node){
            if(!node) return 
            [node.left, node.right] = [node.right, node.left]
            invert(node.left)
            invert(node.right) 
        }

        invert(root)
        return root
    }
}
