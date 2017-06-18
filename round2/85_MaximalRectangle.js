/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) return 0;
    let res = 0, height = 0, width = 0, row = matrix.length, col = matrix[0].length;
    let dp = [];
    dp.length = col + 1;
    dp.fill(0);
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < col; j++) {
            if (matrix[i][j] === "1") dp[j]++;
            else dp[j] = 0;
        }
        let stack = [], top = -1;
        for (let j = 0; j <= col; j++) {
            while (top > -1 && dp[stack[top]] >= dp[j]) {
                height = dp[stack.pop()];
                top--;
                width = top === -1 ? j : (j - (stack[top] + 1));
                res = Math.max(res, height * width);
            }
            stack.push(j);
            top++;
        }
    }
    return res;
}
