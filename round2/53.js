/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    let sum = nums[0], res = nums[0];
    for (let i = 1; i < nums.length; i++) {
        sum = Math.max(sum + nums[i], nums[i]);
        res = Math.max(res, sum);
    }
    return res;
    
};