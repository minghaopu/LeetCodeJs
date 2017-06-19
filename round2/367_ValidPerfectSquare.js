/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let left = 1, right = num;
    let mid, val;
    while (left <= right) {
        mid = left + Math.floor((right - left) / 2);
        val = mid * mid;
        if (val === num) return true;
        else if (val < num) left = mid + 1;
        else right = mid - 1;
    }
    return false;
};