/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var createTree = function(nums, start, end) {
    if (start > end) return null;
    if (start === end) return new TreeNode(nums[start]);
    var rootIndex = Math.ceil((end - start) / 2) + start;
    var root = new TreeNode(nums[rootIndex]);
    root.left = createTree(nums, start, rootIndex - 1);
    root.right = createTree(nums, rootIndex + 1, end);
    return root;
};
var sortedArrayToBST = function(nums) {
    if (nums.length === 0) return null;
    return createTree(nums, 0, nums.length - 1);
};