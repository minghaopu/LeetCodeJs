
var string1 = "d1fas2fdsaf3dsa"
var part = ".*";
var reg = string1[0]+part+string1[0];
console.log(reg)
var pattern = new RegExp(reg,"g");

var findindex = function(string,charar) {
	// var part = ".*";
	// var reg = char+part+char;
	// var pattern = new RegExp(reg,"g");
	var string = string.slice(0);
	var start = string.search(charar);
	var end = start + string.slice(start+1).search(charar);
	return [start, end];
	console.log(start, end, string)
}
var lengthOfLongestSubstring = function(s) {
	var index = 0;
	var length = s.length;
	while (index < length) {
		var result = findindex(s, s[index])
		if( result[1] == -1) {

		}
	}
}

var findsubString = function(string, start, end) {

	while (start < end) {
		var result = findindex(s, s[start])
		if( result[1] == -1) {
			max = findsubString(string, start+1, end)+1;
		} else {
			max = findsubString(string, start, result[1])
		}
	}
}
