/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    const recursivePow = function (x, n) {
        if (n === 0) return 1;
        if (n === 1) return x;
        let sub = recursivePow(x, Math.floor(n / 2));
        return sub * sub * recursivePow(x, n & 1);
    }
    if (n === -2147483648) return Math.abs(x) === 1.0 ? 1.0 : 0;
    else if (n < 0) return 1.0 / recursivePow(x, -n);
    else return recursivePow(x, n);
};