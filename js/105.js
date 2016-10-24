/*
 *
 *     105. Construct Binary Tree from Preorder and Inorder Traversal
 *
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    var inhash = {};
    var l = preorder.length;
    for (var i = 0; i < l; i++) {
        inhash[inorder[i]] = i;
    }
    return createTree(preorder, inhash, 0, l - 1, 0, l - 1);
};
var createTree = function(preorder, inhash, pstart, pend, istart, iend) {
    if (pstart > pend || istart > iend) return null;
    var rootVal = preorder[pstart];
    var root = new TreeNode(rootVal);
    if (inhash[rootVal] !== undefined) {
        var iIndex = inhash[rootVal];
        root.left = createTree(preorder, inhash, pstart + 1, pstart + iIndex - istart, istart, iIndex);
        root.right = createTree(preorder, inhash, pstart + iIndex - istart + 1, pend, iIndex + 1, iend);
    }
    return root;
}