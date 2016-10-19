/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var partition = function(nums, left, right) {
    var l = left + 1,
        r = right,
        t;
    var pivot = nums[left];
    while (l <= r) {
        if (nums[l] < pivot && nums[r] > pivot) {
            t = nums[l];
            nums[l] = nums[r];
            nums[r] = t;
            l++;
            r--;
        }
        if (nums[l] >= pivot) l++;
        if (nums[r] <= pivot) r--;
    }
    t = nums[left];
    nums[left] = nums[r];
    nums[r] = t;
    return r;
}
var findKthLargest = function(nums, k) {
    var left = 0,
        right = nums.length - 1;
    while (true) {
        var p = partition(nums, left, right);
        if (p == k - 1) return nums[p];
        else if (p > k - 1) right = p - 1;
        else left = p + 1;
    }
    return -1;
};