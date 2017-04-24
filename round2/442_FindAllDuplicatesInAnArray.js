/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let res = [];
    let i = 0;
    while (i < nums.length) {
        // nums[i] = i + 1; <=> nums[i] - 1 = i; <=> nums[nums[i] -1] = nums[i];
        if (nums[i] !== nums[nums[i] - 1]) {
            let t = nums[i];
            nums[i] = nums[t-1]; 
            nums[t-1] = t;
        } else i++;
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) res.push(nums[i]);
    }
    return res;
};