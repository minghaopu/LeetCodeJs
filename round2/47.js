/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    nums.sort((a, b) => a - b);
    let res = [];
    let n = nums.length;
    (function helper(start, nums) {
        if (start === n) res.push(nums.slice());
        else {
            for (let i = start; i < n; i++) {
                if (i > start && nums[i] === nums[start]) continue;
                [nums[i], nums[start]] = [nums[start], nums[i]];
                helper(start + 1, nums.slice());
            }
        }
    })(0, nums);
    return res;
};