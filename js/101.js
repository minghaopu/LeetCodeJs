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


/* recursion
var isSymmetric = function(root) {
	if (root === null) return true;
	else return isSubSymmetric(root.left, root.right);
};
var isSubSymmetric = function(left, right) {
	if (left === null && right === null) return true;
	if (left !== null && right !== null && left.val === right.val) return isSubSymmetric(left.left, right.right) && isSubSymmetric(left.right, right.left);
	else return false;
};

*/

/*
 *  iteration
 */
function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

var createTree = function(nums) {
	if (nums.length === 0) return null;
	var q = [];
	var root = new TreeNode(nums[0]);
	var node = null, left = null, right = null;
	var i = 1;
	q.push(root);
	while (q.length !== 0 && i < nums.length) {
		node = q.shift();
		if (nums[i] !== null) {
			left = new TreeNode(nums[i]);
			q.push(left);
		}else {
			left = null;
		}
		i++;
		if (nums[i] !== null) {
			right = new TreeNode(nums[i]);
			q.push(right);
		}else {
			right = null;
		}
		i++;
		node.left = left;
		node.right = right;
	}
	return root;
}
var isSymmetric = function(root) {
	if (root === null) return true;
	var q1 = [];
	var	q2 = [];
	var left, right;
	q1.push(root.left);
	q2.push(root.right);
	while (q1.length !== 0 && q2.length !== 0) {
		left = q1.shift();
		right = q2.shift();
		if (left === null && right === null) continue;
		if (left !== null && right !== null && left.val === right.val) {
			q1.push(left.left);
			q1.push(left.right);
			q2.push(right.right);
			q2.push(right.left);
		} else return false;
	}
	return true;
};
