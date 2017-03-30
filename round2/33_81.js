/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (!Array.isArray(nums) || nums.length === 0 || typeof target !== "number") return -1;
    var left = 0, right = nums.length - 1, mid = null;
    while (left <= right) {
        mid = Math.floor((right - left) / 2) + left;
        if (nums[mid] === target) return mid;
        else if ((nums[left] <= nums[mid] && (nums[left] > target || nums[mid] < target)) || (nums[left] > nums[mid] && nums[mid] < target && target <= nums[right])) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
};