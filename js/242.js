/**
 * 242.js Valid Anagram
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
	var chars = {
		length: 0
	};
	if (s.length !== t.length) return false;
	var l = s.length;
	for (var i = 0; i < l; i++) {
		var c = s[i];
		if (chars[c] === undefined) {
			chars[c] = 1;
			chars.length++;
		} else chars[c]++;
	}
	for (i = 0; i < l; i++) {
		c = t[i];
		if (chars[c] === undefined) return false;
		else {
			chars[c]--;
			if (chars[c] === 0) {
				chars.length--;
				delete chars[c];
			}
		}
	}
	return chars.length == 0;
};

