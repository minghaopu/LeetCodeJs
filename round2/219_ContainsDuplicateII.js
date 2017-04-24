/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] !== undefined)  {
            let j = map[nums[i]];
            if (Math.abs(j - i) <= k) return true;
        }
        map[nums[i]] = i;
    }
    return false;
};