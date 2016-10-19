/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
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
var flatten = function(root) {
    var ptr = new TreeNode(0);
    var newRoot = ptr;
    var stack = [root];
    while (stack.length !== 0) {
        var top = stack.pop();
        ptr.right = new TreeNode(top.val);
        ptr = ptr.right;
        if (top.right) stack.push(top.right);
        if (top.left) stack.push(top.left);
    }
    root.right = newRoot.right.right;
    root.left = null;
};
var flatten2 = function(root) {
    var now = root;
    while (now) {
        if (now.left) {
            var pre = now.left;
            while (pre.right) {
                pre = pre.right;
            }
            pre.right = now.right;
            now.right = now.left;
            now.left = null;
        }
        now = now.right;
    }
};