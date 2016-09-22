/**
 * @param {string} s
 * @return {string}
 */
var isVowel = function(char) {
	return char === "a" || char === "i" || char === "o" || char === "u" || char === "e" || char === "A" || char === "E" || char === "I" || char === "O" || char === "U";
}
var reverseVowels = function(s) {
	var start = 0;
	var end = s.length - 1;
	var sarray = s.split("");
	var temp = "";
	var chars = {
		"a": true,
		"e": true,
		"i": true,
		"o": true,
		"u": true,
		"A": true,
		"E": true,
		"I": true,
		"O": true,
		"U": true
	}
	while (start < end) {
		while (start < end && !chars[sarray[start]]) {
			start++;
		}
		while (start < end && !chars[sarray[end]]) {
			end--;
		}
		temp = sarray[start];
		sarray[start] = sarray[end];
		sarray[end] = temp;
		start++;
		end--;
	}
	return sarray.join("");
};
console.log(reverseVowels("abvce"));