/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    if (!Array.isArray(nums) || nums.length < 4 || typeof target !== "number") return [];
    let res = [];
    let l, r, sum = 0, length = nums.length - 1;
    nums.sort((a, b) => {
        if (typeof a !== "number") return 1;
        if (typeof b !== "number") return -1;
        return a - b;
    });
    while (typeof nums[length] !== "number") length--;
    for (let i = 0; i < length - 2; i++) {
        if (i > 0 && nums[i] === nums[i-1]) continue;
        for (let j = i + 1; j < length - 1; j++) {
            if (j > i+1 && nums[j] === nums[j-1]) continue;
            l = j + 1;
            r = length;
            while (l < r) {
                sum = nums[l] + nums[r] + nums[i] + nums[j];
                if (sum > target) r--;
                else if (sum < target) l++;
                else {
                    res.push([nums[i], nums[j], nums[l], nums[r]]);
                    while (l < r && nums[l] === nums[l+1]) l++;
                    l++;
                    while (l < r && nums[r] === nums[r-1]) r--;
                    r--;
                }
            }
        }
    }
    return res;
};