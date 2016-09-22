/**
 * 249. Group Shifted Strings
 */

/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function(strings) {
	var result = [];
	var map = {};
	var charMap = {
		"a": 1,
		"b": 2,
		"c": 3,
		"d": 4,
		"e": 5,
		"f": 6,
		"g": 7,
		"h": 8,
		"i": 9,
		"j": 10,
		"k": 11,
		"l": 12,
		"m": 13,
		"n": 14,
		"o": 15,
		"p": 16,
		"q": 17,
		"r": 18,
		"s": 19,
		"t": 20,
		"u": 21,
		"v": 22,
		"w": 23,
		"x": 24,
		"y": 25,
		"z": 26
	};
	var key;
	for (var i = 0; i < strings.length; i++) {
		key = "";
		var s = strings[i];
		var offset = charMap[s[0]] - charMap.a;
		for (var j = 0; j < strings[i].length; j++) {
			var temp = charMap[s[j]];
			key += temp - charMap.a - offset < 0 ? temp - offset + 26 : temp - offset;
			key += ",";
		}
		if(map[key] === undefined) map[key] = [];
		map[key].push(s);
	}
	for (var prop in map) {
		map[prop].sort();
		result.push(map[prop]);
	}
	return result;
};