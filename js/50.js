/**
 * 50 Pow(x,n)
 */

 /**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) return 1;
    else if (n === 1) return x;
    else if (n < 0)  return 1.0/pows(x, -n);
    else return pows(x, n);
};
var pows = function(x, n) {
	if (n === 0) return 1;
    if (n === 1) return x;
    var sub = pows(x, Math.floor(n/2));
    return sub * sub * pows(x, n%2);
}