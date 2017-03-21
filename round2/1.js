/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var cache = new Map();
    for (var i = 0; i < nums.length; i++) {
        var rest = target - nums[i];
        if (cache[rest] !== undefined) return [cache[rest], i];
        cache[nums[i]] = i;
    }
    return [];
};