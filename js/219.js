/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// var map = {};

// var findNum = function(num, start, length, array) {
// 	var end = Math.min(start + length, array.length);
// 	for (var i = start; i < end; i++) {
// 		if (array[i] === num) return true;
// 		else if (map[array[i]] === undefined) map[array[i]] = i;
// 		else if (map[array[i]] - i !== 0 && Math.abs(map[array[i]] - i) <= length) return true
// 	}
// 	return false;
// }

var containsNearbyDuplicate = function(nums, k) {
	// if k + i < nums.length use k + i else use nums.length
	var map = {}

	if (k <= 0) return false;

	// var length = k < nums.length ? nums.length - k : nums.length; // The length for the loop
	// for (var i = 0; i < length; i++) {
	// 	// if (findNum(nums[i], i + 1, k, nums)) return true;
	// 	var end = Math.min(i + 1 + k, nums.length);
	// 	var num = nums[i];
	// 	for (var j = i + 1; j < end; j++) {
	// 		if (nums[j] === num) {
	// 			return true;
	// 		}
	// 		else if (map[nums[j]] === undefined) map[nums[j]] = j;
	// 		else if (map[nums[j]] - j !== 0 && Math.abs(map[nums[j]] - j) <= k) {
	// 			return true;
	// 		}
	// 	}
	// }
	for (var i = 0; i < nums.length; i++) {
		if (map[nums[i]] === undefined || i - map[nums[i]] > k) {
			map[nums[i]] = i;
		} else if (i - map[nums[i]] <= k) {
			return true;
		}
	}
	return false;
};


nums = [1, 0, 1, 1];

console.log(containsNearbyDuplicate(nums, 1));
// console.log(containsNearbyDuplicate(nums, 4));