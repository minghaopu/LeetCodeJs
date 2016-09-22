/**
 * 70. Climbing Stairs
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var sums = [0,1,2];
    for (var i = 3; i <= n; i++) {
        sums[i] = sums[i-1] + sums[i-2];
    }
    return sums[n];
};