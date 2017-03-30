/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
Array.prototype.reversePartial = function(i = 0, j = this.length-1) {
	if (i > this.length || j < 0) return this;
	if (i < 0) i = 0;
	if (j > this.length) j = this.length-1;
	
	while (i < j) {
		[this[i], this[j]] = [this[j], this[i]];
		i++;
		j--;
	}
}
var nextPermutation = function(nums) {
    let i = nums.length - 2;
    while (i >= 0 && nums[i] >= nums[i+1]) i--;
    nums.reversePartial(i+1);
    
    if (i === -1) return;
    let index = i + 1;
    
    while (index < nums.length && nums[index] <= nums[i]) index++;
    [nums[index], nums[i]] = [nums[i], nums[index]];
};
