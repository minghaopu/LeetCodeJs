/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
	if (n <= 0) return "";
	var nums = [
		"Z", "A", "B", "C", "D", "E", "F", "G",
		"H", "I", "J", "K", "L", "M", "N",
		"O", "P", "Q", "R", "S", "T", "U",
		"V", "W", "X", "Y"
	];
	var result = "";
	var mod;
	while (n > 0) {
		mod = n % 26;
		result = nums[mod] + result;
		n = (n - (mod === 0 ? 26 : mod)) / 26;
	}
	return result;
};
var convertToTitle2 = function(n) {
	if (n <= 0) return "";
	var nums = [
		"A", "B", "C", "D", "E", "F", "G",
		"H", "I", "J", "K", "L", "M", "N",
		"O", "P", "Q", "R", "S", "T", "U",
		"V", "W", "X", "Y", "Z"
	];
	var result = "";
	var mod;
	while (n > 0) {
		mod = (n - 1) % 26;
		result = nums[mod] + result;
		n = Math.floor((n - 1) / 26);
	}
	return result;
};
for (var i = 0; i <= 1000; i++) {
	console.log("line " + i + ": ", convertToTitle(i));
}