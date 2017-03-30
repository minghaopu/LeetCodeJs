/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var low = 0, high = nums.length, mid = null;
    while (low < high) {
        mid = Math.floor((high - low) / 2) + low;
        if (nums[mid] < target) low = mid + 1;
        else high = mid;
    }
    let left = low;
    low = 0;
    high = nums.length;
    while (low < high) {
        mid = Math.floor((high - low) / 2) + low;
        if (nums[mid] <= target) low = mid + 1;
        else high = mid;
    }
    let right = low;
    return left === right ? [-1, -1] : [left, right - 1];
};