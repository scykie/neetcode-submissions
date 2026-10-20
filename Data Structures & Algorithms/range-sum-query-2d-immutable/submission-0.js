class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        const prefixSum = Array.from({ length: matrix.length + 1 }, () =>
            Array(matrix[0].length + 1).fill(0),
        );
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[0].length; col++) {
                prefixSum[row + 1][col + 1] =
                    prefixSum[row][col + 1] +
                    prefixSum[row + 1][col] +
                    matrix[row][col] -
                    prefixSum[row][col];
            }
        }
        this.prefixSum = prefixSum;
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        const total = this.prefixSum[row2 + 1][col2 + 1];

        const top = this.prefixSum[row1][col2 + 1];

        const left = this.prefixSum[row2 + 1][col1];

        const topLeft = this.prefixSum[row1][col1];

        return total - top - left + topLeft;
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
