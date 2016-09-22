/**
 * 217. Contains Duplicate
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var l = nums.length;
    if (l < 2) return false;
    var hash = {};
    for (var i = 0; i < l; i++) {
        if (hash[nums[i]] !== undefined) return true;
        hash[nums[i]] = 1;
    }
    return false;
    
};