/**
 * 66. Plus one
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var isCarried = false;
    var l = digits.length - 1;
    for (var i = l; i > -1; i--) {
        var t = digits[i];
        if (i === l || isCarried) {
            t++;
            if (t === 10) {
                digits[i] = 0;
                isCarried = true;
            }else{
                digits[i] = t;
                isCarried = false;
            }
        }
        if (i != l && !isCarried) {
            return digits;
        }

    }
    if (isCarried) digits.unshift(1);
    return digits;
};