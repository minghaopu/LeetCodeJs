/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    if (typeof s !== "string" || s.length < 2) return 0;
    let maxLength = 0;
    let dp = new Array(s.length).fill(0);
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ')') {
            if (s[i-1] === '(') {
                dp[i] = i - 2 >= 0 ? dp[i-2] + 2 : 2;
            } else if (i - dp[i-1] - 1 >= 0 && s[i-dp[i-1]-1] === '(') {
                dp[i] = dp[i-1] + 2 + (i-dp[i-1]-2 >= 0 ? dp[i-dp[i-1]-2] : 0);
            }
        }
        maxLength = Math.max(maxLength, dp[i]);
    }
    return maxLength;
};