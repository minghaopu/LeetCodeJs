/**
 * 290. Word Pattern
 */


/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
	var map = [];
	var mapR = [];
	var strList = str.split(" ");
	var l = pattern.length;
	if (l != strList.length) return false;
	for (var i = 0; i < l; i++) {
		var c = pattern[i];
		var s = strList[i];
		if (map[c] === undefined) {
			if (mapR[s] !== undefined) return false;
			map[c] = s;
			mapR[s] = c;
		} else if (map[c] !== s) return false;
	}
	return true
};

