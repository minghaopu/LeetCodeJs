/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = [];
    let n = nums.length;
    (function helper(start) {
        if (start === n) res.push(nums.slice());
        else {
            for (let i = start; i < n; i++) {
                [nums[i], nums[start]] = [nums[start], nums[i]];
                helper(start + 1);
                [nums[i], nums[start]] = [nums[start], nums[i]];
            }
        }
    })(0);
    return res;
};