/**
 * 198. House Robber
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var sums = [0, nums[0]];
    var l = nums.length;
    for (var i = 2; i <= l ;i++) {
        sums[i] = Math.max(sums[i-1], sums[i-2]+nums[i-1]);
    }
    return sums[l];
};
