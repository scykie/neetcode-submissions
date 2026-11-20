
class Solution {
    isSame(p, q) {
        if (!p && !q) return true;
        if (!p || !q) return false;

        if (p.val !== q.val) return false;

        return (
            this.isSame(p.left, q.left) &&
            this.isSame(p.right, q.right)
        );
    }

    isSubtree(root, subRoot) {
        if (!root) return false;

        // Check whether current tree matches subRoot
        if (this.isSame(root, subRoot)) return true;

        // Search recursively in left and right subtrees
        return (
            this.isSubtree(root.left, subRoot) ||
            this.isSubtree(root.right, subRoot)
        );
    }
}
