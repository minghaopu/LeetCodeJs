/**
 * 202. Happy Number
 */

/**
 * @param {number} n
 * @return {boolean}
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var hash = {};
    while (n !== 1) {
        if (hash[n] !== undefined) return false;
        hash[n] = true;
        var sum = 0;
        while (n > 0) {
            sum += Math.pow(n % 10, 2);
            n = Math.floor(n / 10);
        }
        n = sum;
    }
    return true;
};