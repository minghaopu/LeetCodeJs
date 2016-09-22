/**
 * 283. Move Zeroes
 */


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
	var i = -1,
		j = 0;
	var temp;
	while (j < nums.length) {
		if (nums[j] === 0) {
			j++;
			continue;
		}
		i++;
		temp = nums[i];
		nums[i] = nums[j];
		nums[j] = temp;
		j++
	}
};
