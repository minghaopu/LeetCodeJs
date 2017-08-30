/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function(nums, target) {
    if (nums.length < 3) return 0;
    let count = 0, len = nums.length, left, right, sum;
    nums.sort((a, b) => {
        if (a - b > 0) return 1;
        else if (a - b < 0) return -1
        else return 0;
    })
    for (let i = 0; i < len - 2; ++i) {
        left = i + 1;
        right = len - 1;
        while (left < right) {
            sum = nums[i] + nums[left] + nums[right];
            if (sum < target) {
                count += right - left;
                left++;
            } else right--;
        }
    }
    return count;
};