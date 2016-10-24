/**
 * @param {number} n
 * @return {number}
 */
var findMinLength = function(n, hash) {
    if (hash[n] !== undefined) return hash[n];
    var root = 1;
    var minL = n;
    while (n >= root * root) {
        root++;
    }
    for (var i = 1; i < root; i++) {
        var res = n - i * i;
        minL = Math.min(minL, findMinLength(res,hash));
    }
    minL++;
    hash[n] = minL;
    return minL;
}
var numSquares = function(n) {
    var hash = {};
    for (var i = 0; i * i <= n; i++) {
        hash[i * i] = 1;
    }
    return findMinLength(n, hash);
};
/**
 * @param {number} n
 * @return {number}
 */
var isSquare = function(n) {
    var tmp = Math.round(Math.sqrt(n));
    return tmp * tmp === n;
}
var numSquares2 = function(n) {
    while (n % 4 === 0) n >>=2;
    if (isSquare(n)) return 1;
    if (n % 8 === 7) return 4;
    var sqrt = Math.round(Math.sqrt(n))
    for (var i = 1; i <= sqrt; i++) {
        if (isSquare(n - i*i)) return 2;
    }
    return 3;
};
