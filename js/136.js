// Given an array of integers, every element appears twice except for one. Find that single one.
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
	if (nums.length === 0) return 0;
	for (var i = 1; i < nums.length; i++) {
		nums[0] ^= nums[i]; //XOR to calculate. A XOR A = 0; B XOR 0 = B;
	}
	return nums[0];
};


// Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice. 
// Find the two elements that appear only once.
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber3 = function(nums) {
    var diff = nums[0];
    for (var i = 1; i < nums.length; i++) {
        diff ^= nums[i];
    }
    diff &= -diff;
    var res = [0, 0];
    for (i = 0; i < nums.length; i++) {
        if ((nums[i] & diff) === 0) res[0] ^= nums[i];
        else res[1] ^= nums[i];
    }
    return res;
};