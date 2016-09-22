/**
 * 28. Implement strStr()
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
	var i = 0,
		j = 0;
	var m = haystack.length,
		n = needle.length;
	if (n == 0) return 0;
	while (i < m && j < n) {
		if (m - i < n - j) return -1;
		if (haystack[i] == needle[j]) {
			i++;
			j++;
		} else if (j == 0) {
			i++;
		} else {
			i = i - j + 1;
			j = 0;
		}
	}
	return j == n ? i - n : -1;
};