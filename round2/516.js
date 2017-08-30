/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    let n = s.length;
    if (n === 0) return 0;
    let dp = new Array(n);
    for (let i = 0; i < n; i++) {
        dp[i] = Array(n).fill(0);
        dp[i][i] = 1;
    }
    for (let i = 0; i < n - 1; i++) dp[i][i+1] = s[i] === s[i+1] ? 2 : 1;
    for (let len = 3; len <= n; len++) {
        for (let i = 0; i + len <= n; i++) {
            let j = i + len - 1;
            if (s[i] === s[j]) {
                dp[i][j] = dp[i+1][j-1] + 2;
            } else {
                dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1]);
            }
        }
    }
    return dp[0][n-1];
};