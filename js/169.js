/**
 * 169. Majority Element
 */

 
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var candidate = nums[0];
    var count = 0;
    for (var i = 0; i < nums.length; i++) {
        if (count === 0) candidate = nums[i];
        if (candidate === nums[i]) count++;
        else count--;
    }
    return candidate;
};