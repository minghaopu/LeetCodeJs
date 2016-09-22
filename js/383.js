/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
	var m = {};
	for (var i = 0; i < ransomNote.length; i++) {
		if (m[ransomNote[i]] === undefined) m[ransomNote[i]] = 1;
		else m[ransomNote[i]]++;
	}
	for (var i = 0; i < magazine.length; i++) {
		if (m[magazine[i]] !== undefined) m[magazine[i]]--;
	}
	for (var prop in m) {
		if (m[prop] > 0) return false;
	}
	return true;
};
console.log(canConstruct("aa","aab"));