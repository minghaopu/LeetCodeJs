/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if (divisor === 0 || (dividend === -2147483648 && divisor === -1)) return 2147483647;
    let res = 0;
    let sign = (dividend < 0) ^ (divisor < 0);
    let dd = Math.abs(dividend), dv = Math.abs(divisor);
    while (dd >= dv) {
        let base = dv;
        let tmp = 1;
        while ((dd >> 1) > base) {
            base <<= 1;
            tmp <<= 1;
        }
        dd -= base;
        res += tmp;
    }
    return sign === 0 ? res : -res;
};