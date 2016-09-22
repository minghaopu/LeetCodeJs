/**
 * 276. Paint Fence
 */


/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numWays = function(n, k) {
	if (n === 0 || k === 0) return 0;
	if (n === 1) return k;
	var dif = [k];
	var sam = [0];
	for (var i = 1; i < n; i++) {
		sam[i] = dif[i - 1];
		dif[i] = (k - 1) * (dif[i - 1] + sam[i - 1]);
	}
	return dif[n - 1] + sam[n - 1];
};