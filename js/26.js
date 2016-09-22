/**
 * 26. Remove Duplicates from Sorted Array
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var l = nums.length, i = 0, j = 0;
    if (l < 2) return l;
    while(i < nums.length) {
        if (nums[i] !== nums[i+1]) {
            if (i !== j) {
                nums.splice(j, i-j);
                i = j;
            }
            j++;
        }
        i++;
    }
    return nums.length;
};
