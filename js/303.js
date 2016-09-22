/**
 * 303. Range Sum Query - Immutable
 */

/**
 * @constructor
 * @param {number[]} nums
 */
var nums = [-2, 0, 3, -5, 2, -1];
var NumArray = function(nums) {
	this.sums = [0];
	var sum = 0;
	for (var i = 1; i <= nums.length; i++) {
		sum += nums[i - 1];
		this.sums[sum];
	}
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
	return this.sums[j + 1] - this.sums[i];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.sumRange(0, 2);
 */
