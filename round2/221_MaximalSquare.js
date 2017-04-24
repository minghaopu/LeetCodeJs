/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    
    if (matrix.length === 0 || matrix[0].length === 0) return 0;
    const m = matrix.length, n = matrix[0].length;
    let dp = [];
    let maxL = 0;
    for (let i = 0; i < m ; i++) {
        dp[i] = [];
        dp[i].length = n;
        dp[i].fill(0);
    }
    for (let i = 0; i < m; i++) {
        dp[i][0] = matrix[i][0] - '0';
        if (dp[i][0]) maxL = 1;
    }
    for (let i = 0; i < n; i++) {
        dp[0][i] = matrix[0][i] - '0';
        if (dp[0][i]) maxL = 1;
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === '0') dp[i][j] = 0;
            else if (matrix[i-1][j-1] === '1') {
                dp[i][j] = Math.min(Math.min(dp[i-1][j], dp[i][j-1]), dp[i-1][j-1]) + 1;
                maxL = Math.max(dp[i][j], maxL);
            } else {
                dp[i][j] = 1;
            }
        }
    }
    return maxL * maxL;
};