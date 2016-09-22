/**
 * 67. Add Binary
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
	var s = "";
	var i = a.length - 1,
		j = b.length - 1;
	var flag = 0;
	while (i >= 0 || j >= 0) {
		if (i >= 0) {
			flag += parseInt(a[i]);
			i--;
		}
		if (j >= 0) {
			flag += parseInt(b[j]);
			j--;
		}
		s = flag % 2 + s;
		flag = flag > 1 ? 1 : 0;
	}
	return flag === 1 ? (1 + s) : s;
};