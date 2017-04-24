/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let left = 0, right = nums.length - 1;
    function partition(left, right) {
        let pivot = nums[left];
        let l = left + 1, r = right;
        while (l <= r) {
            if (nums[l] < pivot && nums[r] > pivot) [nums[l], nums[r]] = [nums[r], nums[l]];
            if (nums[l] >= pivot) l++;
            if (nums[r] <= pivot) r--;
        }
        [nums[left], nums[r]] = [nums[r], nums[left]];
        return r;
    }
    while (true) {
        let p = partition(left, right);
        if (p === k - 1) return nums[p];
        else if (p < k - 1) left = p + 1;
        else right = p - 1;
    }
    return -1;
};
