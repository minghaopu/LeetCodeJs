/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
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
var levelOrderBottom = function(root) {
	var result = [];
	if (root === null) return result;
	var queue = [];
	queue.push(root);
	queue.push(null);
	var level = [];
	while (queue.length !== 0) {
		var node = queue.shift();
		if (node !== null) {
			level.push(node.val);
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		} else {
			if (level.length !== 0) {
				//result.push(level); need to use the copy of the array
				result.push(level.slice());
				queue.push(null);
				level.length = 0;
			}
		}
	}
	return result.reverse();
};

console.log(levelOrderBottom(createTree([3,9,20,null,null,15,7])));