/**
 * 110. Balanced Binary Tree
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
	return testBalance(root) == -1 ? false : true;
};

var testBalance = function(root) {
	if (root === null) return 0;
	var left = testBalance(root.left);
	if (left === -1) return -1;
	var right = testBalance(root.right);
	if (right === -1) return -1;
	var dif = left - right;
	if (dif > 1 || dif < -1) return -1;
	else return (dif > 0 ? left : right) + 1;
}