
class Solution {
    lowestCommonAncestor(root, p, q) {
        // Base condition
        if (!root) return null;

        // Found either p or q
        if (root === p || root === q) {
            return root;
        }

        // Search in both subtrees
        const left = this.lowestCommonAncestor(root.left, p, q);
        const right = this.lowestCommonAncestor(root.right, p, q);

        // Both nodes found in different subtrees
        if (left && right) return root;

        // Return whichever subtree contains p or q
        return left || right;
    }
}
