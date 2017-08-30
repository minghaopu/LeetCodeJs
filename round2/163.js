/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function(nums, lower, upper) {
    const getRange = (start, end) => {
        return "" + start + (start === end ? "" : "->" + end);
    }
    let res = [];
    let pre = lower - 1, cur = 0;
    for (let i = 0; i <= nums.length; i++) {
        cur = i === nums.length ? upper + 1 : nums[i];
        if (cur - pre >= 2) res.push(getRange(pre + 1, cur - 1));
        pre = cur;
    }
    return res;
};