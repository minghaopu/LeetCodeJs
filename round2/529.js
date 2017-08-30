/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
    let row = click[0], col = click[1], m = board.length, n = board[0].length;
    if (board[row][col] === 'M') {
        board[row][col] = 'X';
        return board;
    }
    (function reveal(row, col) {
        if (row >= 0 && col >= 0 && row < m && col < n && board[row][col] == 'E') {
            let count = 0;
            if (row < m - 1 && col < n -1 && board[row + 1][col + 1] == 'M') count++;
            if (row < m - 1 && col > 0 && board[row + 1][col - 1] == 'M') count++;
            if (row < m - 1 && board[row + 1][col] == 'M') count++;
            if (col < n - 1 && board[row][col + 1] == 'M') count++;
            if (col > 0 && board[row][col - 1] == 'M') count++;
            if (row > 0 && col < n -1 && board[row - 1][col + 1] == 'M') count++;
            if (row > 0 && col > 0 && board[row - 1][col - 1] == 'M') count++;
            if (row > 0 && board[row - 1][col] == 'M') count++;
            if (count > 0) {
                board[row][col] = '' + count;
            } else {
                board[row][col] = 'B';
                reveal(row + 1, col + 1);
                reveal(row + 1, col - 1);
                reveal(row + 1, col);
                reveal(row, col + 1);
                reveal(row, col - 1);
                reveal(row - 1, col + 1);
                reveal(row - 1, col - 1);
                reveal(row - 1, col);
            }
        }
    })(row, col);
    return board;
};