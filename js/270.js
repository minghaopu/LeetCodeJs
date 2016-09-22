/**
 * 270. Closest Binary Search Tree Value
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
 * @param {number} target
 * @return {number}
 */
function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

var closestValue = function(root, target) {
	var min = root.val,
		temp;
	while (root != null) {
		temp = root.val;
		min = Math.abs(temp - target) < Math.abs(min - target) ? temp : min;
		root = target > temp ? root.right : root.left;
	}
	return min;
};