/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    let base = 1;
    while (Math.floor(x / 10) >= base) base *= 10;
    while (x > 0) {
        if (x % 10 != Math.floor(x/base)) return false;
        x = Math.floor((x %= base) / 10);
        base /= 100;
    }
    return true;
};