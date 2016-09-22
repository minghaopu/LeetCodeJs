/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
	var result = [];
	for (var i = 0; i <= rowIndex; i++) {
		result[i] = combinations(rowIndex, i);
	}
	return result;
};
var combinations = function (n, k) {
	if (k === 0 || k === n) return 1;
	var r = 1, d = 1;
	while (k > 0) {
		r *= n--;
		d *= k--;
	}
	return r/d;
}
console.log(combinations(6,4));