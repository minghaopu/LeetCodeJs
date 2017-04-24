/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let count = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i-1-count]) count++;
        else nums[i-count] = nums[i];
    }
    return nums.length - count;
};
var removeDuplicates = function(nums) {
    let length = 0;
    nums.reduce((prev, curr) => {
        if (prev !== curr) nums[length++] = curr;
        return curr;
    }, null);
    return length;
};
// 80
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicatesWithAtMostK = function(nums, k) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i - k - count]) count++;
        else nums[i - count] = nums[i];
    }
    nums.slice(0, nums.length - count);
    return nums.length - count;
}
var removeDuplicates = function(nums) {
    return removeDuplicatesWithAtMostK(nums, 2);
};
