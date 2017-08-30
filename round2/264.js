/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let dp = new Array(n+1);
    dp[0] = 1;
    dp[1] = 1;
    let pt2 = 1, pt3 = 1, pt5 = 1;
    for (let i = 2; i <= n; i++) {
        let ug2 = dp[pt2] * 2, ug3 = dp[pt3] * 3, ug5 = dp[pt5] * 5;
        dp[i] = Math.min(ug2, Math.min(ug3, ug5));
        if (dp[i] === ug2) pt2++;
        if (dp[i] === ug3) pt3++;
        if (dp[i] === ug5) pt5++;
    }
    return dp[n];
};