class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */

    searchMatrix(matrix, target) {
        const rows = matrix.length;
        const cols = matrix[0].length;

        function getMatrixElem(num) {
            const row = Math.floor(num / cols);
            const col = num % cols;

            return matrix[row][col];
        }

        let l = 0;
        let r = rows * cols - 1;

        while (l <= r) {
            const m = Math.floor((l + r) / 2);
            const matValue = getMatrixElem(m);

            if (matValue === target) return true;

            if (matValue < target) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }

        return false;
    }
}