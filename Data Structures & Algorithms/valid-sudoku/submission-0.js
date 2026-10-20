class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rowMap = {};
        const colMap = {};
        const squareMap = {};

        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board.length; col++) {
                if (board[row][col] === ".") continue;
                
                rowMap[row] = rowMap[row] || new Set();
                if (rowMap[row].has(board[row][col])) return false;
                rowMap[row].add(board[row][col]);

                colMap[col] = colMap[col] || new Set();
                if (colMap[col].has(board[row][col])) return false;
                colMap[col].add(board[row][col]);

                const square = `${Math.floor(row / 3)},${Math.floor(col / 3)}`;
                squareMap[square] = squareMap[square] || new Set();
                if (squareMap[square].has(board[row][col])) return false;
                squareMap[square].add(board[row][col]);
            }
        }

        return true;
    }
}
