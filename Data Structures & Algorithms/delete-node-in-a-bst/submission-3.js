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
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root, key) {
        // mostly same as insert
        // 3 cases : no child, single child, both children

        // 1st case : return null
        if (!root) return root;
        if (root.val < key) root.right = this.deleteNode(root.right, key);
        else if (key < root.val) root.left = this.deleteNode(root.left, key);
        else {
            // 2nd case : return other child
            if (!root.left) return root.right;
            if (!root.right) return root.left;

            // 3rd case : find min
            let min = root.right;
            while (min.left) {
                min = min.left;
            }
            root.val = min.val;
            root.right = this.deleteNode(root.right, min.val);
        }

        return root;
    }
}
