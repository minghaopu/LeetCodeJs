/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if (!Array.isArray(nums) || nums.length < 2) return 0;
    let curMax = 0, nextMax = 0, i = 0, level = 0, n = nums.length;
    while (curMax - i >= 0) {
        level++;
        while (i <= curMax) {
            nextMax = Math.max(nextMax, i + nums[i]);
            if (nextMax >= n - 1) return level;
            i++;
        }
        curMax = nextMax;
    }
    return 0;
};