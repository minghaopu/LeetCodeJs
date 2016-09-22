/**
 * 191. Number of 1 Bits
 */

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {	//90%
	var num = 0;
	for (i = 31; i > -1; i--) {
		var mod = Math.pow(2, i);
		if (n < mod) continue;
		num++;
		n = n % mod;
	}
	return num;
};

var hammingWeight2 = function(n) {	//60%
	var num = 0;
	for (var i = 0; i < 32; i++) {
		num += n & 1;
		n = n >> 1;
	}
	return num;
};