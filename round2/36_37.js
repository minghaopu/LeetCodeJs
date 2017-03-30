/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    var row = new Array(10).fill(0), col = new Array(10).fill(0), block = new Array(10).fill(0);
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== '.') {
                let num = 1 << (board[i][j] - '0');
                if ((row[i] & num) || (col[j] & num) || (block[Math.floor(i/3) * 3 + Math.floor(j/3)] & num)) return false;
                row[i] |= num;
                col[j] |= num;
                block[Math.floor(i/3) * 3 + Math.floor(j/3)] |= num;
            }
        }
    }
    return true;
};

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

var solveSudoku = function(board) {
    var row = new Array(10).fill(0), col = new Array(10).fill(0), block = new Array(10).fill(0);
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === '.') continue;
            let num = 1 << (board[i][j] - '0');
            row[i] |= num;
            col[j] |= num;
            block[Math.floor(i/3) * 3 + Math.floor(j/3)] |= num;
        }
    }
    (function helper(i, j) {
        if (i === 9) return true;
        if (j === 9) return helper(i+1, 0);
        if (board[i][j] !== '.') return helper(i, j+1);
        
        for (let shift = 1; shift <= 9; shift++) {
            let num = (1 << shift);
            if (!(row[i] & num) && !(col[j] & num) && !(block[Math.floor(i/3) * 3 + Math.floor(j/3)] & num)) {
                board[i][j] = String.fromCharCode('0'.charCodeAt() + shift);
                row[i] |= num;
                col[j] |= num;
                block[Math.floor(i/3) * 3 + Math.floor(j/3)] |= num;
                if (helper(i, j+1)) return true;
                board[i][j] = '.';
                row[i] ^= num;
                col[j] ^= num;
                block[Math.floor(i/3) * 3 + Math.floor(j/3)] ^= num;
            }
        }
        return false;
    })(0, 0);
};
