/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if (nums.length === 0) return 0;
    let res = nums[0], maxP = res, minP = res;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < 0) {
            [minP, maxP] = [maxP, minP];
        }
        maxP = Math.max(maxP * nums[i], nums[i]);
        minP = Math.min(minP * nums[i], nums[i]);
        res = Math.max(res, maxP);
    }
    return res;
};