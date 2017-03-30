/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let col = new Array(n).fill(0);
    let dia1 = new Array(2 * n - 1).fill(0);
    let dia2 = new Array(2 * n - 1).fill(0);
    let res = [];
    let board = [];
    for (let i = 0; i < n; i++) board[i] = new Array(n).fill('.');
    (function dfs(i) {
        if (i === n) {
            let tmp = [];
            for (let j = 0; j < n; j++) tmp.push(board[j].join(''));
            res.push(tmp);
        } else {
            for (let j = 0; j < n; j++) {
                if (col[j] || dia1[i+j] || dia2[n - i - 1 + j]) continue;
                board[i][j] = 'Q';
                dia1[i+j] = dia2[n-i-1+j] = col[j] = 1;
                dfs(i+1);
                dia1[i+j] = dia2[n-i-1+j] = col[j] = 0;
                board[i][j] = '.';
            }
        }
    })(0);
    return res;
};