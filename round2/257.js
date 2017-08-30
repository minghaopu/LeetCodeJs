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
var binaryTreePaths = function(root) {
    let res = [];
    (function helper(node, path) {
        if (!node) return;
        path += path === '' ? node.val : '->' + node.val;
        if (!node.left && !node.right) {
            res.push(path);
        }
        if (node.left) helper(node.left, path);
        if (node.right) helper(node.right, path);
    })(root, '');
    return res;
};