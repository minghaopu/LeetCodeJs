/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    if (nums.length < 2) return 0;
    let slow = 0, fast = 0;
    while (true) {
        slow = nums[slow];
        fast = nums[nums[fast]];
        if (slow === fast) break;
    }
    fast = 0;
    while (fast != slow) {
        slow = nums[slow];
        fast = nums[fast];
    }
    return slow;
};