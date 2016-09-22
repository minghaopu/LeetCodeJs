/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
	// return num > 0 && (num === Math.pow(4, Math.round(Math.log2(num) / 2)));
	return num > 0 && (num & (num - 1)) === 0 && (num - 1) % 3 === 0;
};