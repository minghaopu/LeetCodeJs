/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let n = nums.length;
    let i = 0;
    while (i < n) {
        if (nums[i] === i+1 || nums[i] <= 0 || nums[i] > n || nums[nums[i] - 1] === nums[i]) i++;
        else {
            let t = nums[i];
            nums[i] = nums[t - 1];
            nums[t - 1] = t;
        }
    }
    for (i = 0; i < n; i++) {
        if (nums[i] !== i + 1) return i+1;
    }
    return n + 1;
};