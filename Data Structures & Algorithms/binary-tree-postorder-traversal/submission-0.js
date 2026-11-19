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
    postorderTraversal(root) {
        const v = []

        function postorder(node){
            if(!node) return 
            postorder(node.left)
            postorder(node.right)
            v.push(node.val)
        }

        postorder(root)
        return v
    }
}
