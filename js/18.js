/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
	var res = [];
	nums.sort(function(a, b) {
		if (a - b > 0) return 1;
		else if (a - b < 0) return -1;
		else return 0;
	});
	for (var i = 0; i < nums.length - 3; i++) {
		if (i > 0 && nums[i] === nums[i - 1]) continue;
		var t = threeSum(nums, target - nums[i], i);
		for (var l = 0; l < t.length; l++) {
			t[l].splice(0,0,nums[i]);
		}
		res = res.concat(t);
	}
	return res;
};
var threeSum = function(nums, target, start) {
	var res = [];
	for (var first = start; first < nums.length - 2; first++) {
		if (first > start && nums[first] === nums[first - 1]) continue;
		var second = first + 1;
		var third = nums.length - 1;
		while (second < third) {
			var sum = nums[first] + nums[second] + nums[third];
			if (sum > target) third--;
			else if (sum < target) second++;
			else {
				res.push([nums[first], nums[second], nums[third]]);
				while (nums[second] === nums[second + 1]) second++;
				while (nums[third] === nums[third - 1]) third++;
				second++;
				third--;
			}
		}
	}
	return res;
}