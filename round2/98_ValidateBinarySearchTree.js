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
var isValidBST = function(root) {
    return (function helper(node, maxNode, minNode){
        if (!node) return true;
        if ((minNode && minNode.val >= node.val) || (maxNode && maxNode.val <= node.val)) return false;
        return helper(node.left, node, minNode) && helper(node.right, maxNode, node);
    }) (root, null, null)
};
