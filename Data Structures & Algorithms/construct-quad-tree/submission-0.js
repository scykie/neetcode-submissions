class Solution {
    buildNode(i, j, size, grid) {
        if (size === 1) {
            return new Node(grid[i][j] === 1, true);
        }

        let half = size / 2;

        let tl = this.buildNode(i, j, half, grid);
        let tr = this.buildNode(i, j + half, half, grid);
        let bl = this.buildNode(i + half, j, half, grid);
        let br = this.buildNode(i + half, j + half, half, grid);

        // Merge if all children are identical leaves
        if (
            tl.isLeaf && tr.isLeaf && bl.isLeaf && br.isLeaf &&
            tl.val === tr.val &&
            tr.val === bl.val &&
            bl.val === br.val
        ) {
            return new Node(tl.val, true);
        }

        let node = new Node(false, false, tl, tr, bl, br);
        return node;
    }

    construct(grid) {
        return this.buildNode(0, 0, grid.length, grid);
    }
}