/**
 * 288. Unique Word Abbreviation
 */

/**
 * @constructor
 * @param {string[]} dictionary
 */
var ValidWordAbbr = function(dictionary) {
	var abd = {};
	for (var i = 0; i < dictionary.length; i++) {
		var s = dictionary[i];
		var l = s.length;
		var t = s[0] + l + s[l - 1];
		if (!Array.isArray(abd[t])) {
			abd[t] = new Array();
		}
		abd[t].push(s);
	}
	this.abd = abd;
};

/**
 * @param {string} word
 * @return {bool}
 */
ValidWordAbbr.prototype.isUnique = function(word) {
	var abd = this.abd;
	var l = word.length;
	if (l === 0) return true;
	var t = word[0] + l + word[l - 1];
	if (abd[t] === undefined || abd[t].length === abd[t].count(word)) return true;
	return false;
};

Array.prototype.count = function(value) {
	var count = 0;
	for (var i = 0; i < this.length; i++) {
		if (this[i] === value) count++;
	}
	return count;
}


/**
 * Your ValidWordAbbr object will be instantiated and called as such:
 * var vwa = new ValidWordAbbr(dictionary);
 * vwa.isUnique("word");
 * vwa.isUnique("anotherWord");
 */