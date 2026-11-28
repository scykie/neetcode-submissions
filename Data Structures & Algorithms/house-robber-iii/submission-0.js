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
    rob(root) {
        // for each node return [skip, take]
        function dfs(node){
            if(!node) return [0,0]
            const [l_skip, l_take] = dfs(node.left)
            const [r_skip, r_take] = dfs(node.right)

            const take = node.val + l_skip + r_skip
            const skip = Math.max(l_skip,l_take) + Math.max(r_skip,r_take)
            return [skip, take]
        }

        return Math.max(...dfs(root))
    }
}
