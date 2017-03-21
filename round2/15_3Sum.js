/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (!Array.isArray(nums) || nums.length === 0) return [];
    nums.sort((a, b) => {
        if (typeof a !== "number") return 1;
        if (typeof b !== "number") return -1;
        return a - b;
    });
    let res = [];
    let length = nums.length - 1;
    while (typeof nums[length] !== "number") length--;
    for (let i = 0; i < length - 1; i++) {
        if (i > 0 && nums[i] == nums[i-1]) continue;
        let l = i + 1, r = length, rest = -nums[i];
        while (l < r) {
            let sum = nums[l] + nums[r];
            if (sum > rest) r--;
            else if (nums[l] + nums[r] < rest) l++;
            else {
                res.push([nums[i], nums[l], nums[r]]);
                while (l < r && nums[l] === nums[l+1]) l++;
                l++;
                while (l < r && nums[r] === nums[r-1]) r--;
                r--;
            }
        }
    }
    return res;
};