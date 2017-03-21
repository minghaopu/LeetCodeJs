/**
 * 26. Remove Duplicates from Sorted Array
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var count = 0;
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) count++;
        else nums[i - count] = nums[i];
    }
    return nums.length - count;
};
