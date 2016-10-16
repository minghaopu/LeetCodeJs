/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var createTree = function(nums) {
    if (nums.length === 0) return null;
    var q = [];
    var root = new TreeNode(nums[0]);
    var node = null,
        left = null,
        right = null;
    var i = 1;
    q.push(root);
    while (q.length !== 0 && i < nums.length) {
        node = q.shift();
        if (nums[i] !== null) {
            left = new TreeNode(nums[i]);
            q.push(left);
        } else {
            left = null;
        }
        i++;
        if (nums[i] !== null) {
            right = new TreeNode(nums[i]);
            q.push(right);
        } else {
            right = null;
        }
        i++;
        node.left = left;
        node.right = right;
    }
    return root;
}
var minDepth = function(root) {
    if (root === null) return 0;
    if (root.left === null && root.right === null) return 1;
    else if (root.right === null && root.left !== null) return 1 + minDepth(root.left);
    else if (root.right !== null && root.left === null) return 1 + minDepth(root.right);
    else return 1 + Math.min(minDepth(root.left), minDepth(root.right));
};