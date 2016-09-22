/**
 * 266. Palindrome Permutation
 */


/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
	var map = {};
	for (var chr of s) {
		if (map[chr] === undefined) {
			map[chr] = 1
		} else {
			map[chr]++
		}
	}
	var hasOdd = false;
	for (var prop in map) {
		if (map[prop] % 2 === 1) {
			if (hasOdd) {
				return false;
			} else {
				hasOdd = true;
			}
		}

	}
	return true;
};
