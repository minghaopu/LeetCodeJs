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
var countUnivalSubtrees = function(root) {
    let count = 0;
    (function helper(node) {
        if (!node) return true;
        let left = helper(node.left), right = helper(node.right);
        if (left && right && (!node.left || node.left.val === node.val) && (!node.right || node.right.val === node.val)) {
            ++count;
            return true;
        }
        return false;
    })(root);
    return count;
};