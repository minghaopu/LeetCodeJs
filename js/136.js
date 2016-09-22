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