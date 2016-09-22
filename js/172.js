/**
 * 172. Factorial Trailing Zeroes
 */

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    var r = 0;
    while (n > 4) {
        n = Math.floor(n/5);
        r += n;
    }
    return r;
};