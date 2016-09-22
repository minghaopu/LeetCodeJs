/**
 * 27. Remove Element
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var l = nums.length-1, i = 0;
    while (i <= l) {
        if (nums[i] !== val) i++;
        else {
            var t = nums[l];
            nums[i] = t;
            nums.length = l--;
        }
    }
    return nums.length;
};