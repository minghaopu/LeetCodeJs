/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    if (word === "") return true;
    let row = board.length, col = board[0].length;
    if (row === 0 || col === 0) return false;
    function dfs(start, i, j) {
    	if (start === word.length) return true;
    	if (i >= row || j >= col || i < 0 || j < 0) return false;
    	if (board[i][j] === "*" || board[i][j] !== word[start]) return false;
    	let tmp = board[i][j];
    	board[i][j] = "*";
    	let res = false;
    	res = dfs(start + 1, i + 1, j);
    	if (!res) res = dfs(start + 1, i - 1, j);
    	if (!res) res = dfs(start + 1, i, j + 1);
    	if (!res) res = dfs(start + 1, i, j - 1);
    	board[i][j] = tmp;
    	return res;
    }
    for (let i = 0; i < row; i++) {
    	for (let j = 0; j < col; j++) {
    		if (dfs(0, i, j)) return true;
    	}
    }
    return false;
};