/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var low = 0, high = nums.length, mid = null;
    while (low < high) {
        mid = Math.floor((high - low) / 2) + low;
        if (nums[mid] < target) low = mid + 1;
        else high = mid;
    }
    return low;
};