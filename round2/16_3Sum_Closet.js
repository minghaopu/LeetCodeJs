/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    if (!Array.isArray(nums) || nums.length === 0 || typeof target !== "number") return 0;
    nums.sort((a, b) => {
        if (typeof a !== "number") return 1;
        if (typeof b !== "number") return -1;
        return a - b;
    });
    let dif = Number.MAX_VALUE, l, r, ans = 0, sum = 0;
    let length = nums.length - 1;
    while (typeof nums[length] !== "number") length--;
    
    for (let i = 0; i < length - 1; i++) {
        if (i > 0 && nums[i] === nums[i-1]) continue;
        l = i + 1;
        r = length;
        while (l < r) {
            sum = nums[i] + nums[l] + nums[r];
            if (sum > target) r--;
            else if (sum < target) l++;
            else return sum;
            
            if (dif > Math.abs(sum - target)) {
                dif = Math.abs(sum - target);
                ans = sum;
            }
        }
    }
    return ans;
};