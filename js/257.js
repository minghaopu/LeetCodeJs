/**
 * 257. Binary Tree Paths
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
 * @return {string[]}
 */

var findPath = function(root, paths, path) {
	if (root.left === null && root.right === null) {
		paths.push(path);
		return;
	}
	if (root.left !== null) findPath(root.left, paths, path + "->" + root.left.val);
	if (root.right !== null) findPath(root.right, paths, path + "->" + root.right.val);
}

var binaryTreePaths = function(root) {
	var paths = [];
	if (root === null) return paths;
	findPath(root, paths, ""+root.val);
	return paths;
};