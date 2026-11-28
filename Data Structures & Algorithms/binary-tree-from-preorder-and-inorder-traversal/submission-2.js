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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        // take node from preorder
        // find in inorder
        // left partition left subtree, right for right subtree
        // NOTE: inorder idx will be used for both array partitions
        let pre_idx = 0;
        let indices = new Map();

        inorder.forEach((val, i) => indices.set(val, i));

        function dfs(l, r) {
            if (l > r) return null;
            let root_val = preorder[pre_idx++];
            let root = new TreeNode(root_val);
            let mid = indices.get(root_val);
            root.left = dfs(l, mid - 1);
            root.right = dfs(mid + 1, r);
            return root;
        }

        return dfs(0, inorder.length - 1);
    }
}
