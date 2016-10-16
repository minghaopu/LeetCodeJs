/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */

  // Time Limit Exceeded
var findLowerBound = function(obj, value) {
	var minDif = Number.MAX_VALUE;
	var minP = null;
	for (var prop in obj) {
		var dif = obj[prop] - value;
		if (dif >= 0) {
			if (minDif > dif) {
				minDif = dif;
				minP = prop;
			}
		}
	}
	return minP;
}
var containsNearbyAlmostDuplicate = function(nums, k, t) {
	if (k === 0 || nums.length < 2) return false;
	var map = {};
	for (var i = 0; i < nums.length; i++) {
		if (i > k) delete map[i - k - 1];
		var prop = findLowerBound(map, nums[i] - t);
		if (prop !== null && Math.abs(nums[i] - map[prop]) <= t) return true;
		map[i] = nums[i];
	}
	return false;
};