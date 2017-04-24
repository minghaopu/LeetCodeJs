/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let cache = new Set();
    for (let num of nums) {
        if (cache.has(num)) return true;
        cache.add(num);
    }
    return false;
};