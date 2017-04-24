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
    if (preorder.length === 0 || inorder.length === 0) return null;
    let cache = {};
    let size = preorder.length;
    for (let i = 0; i < size; i++) cache[inorder[i]] = i;
    return (function helper(pstart, pend, istart, iend) {
        if (pstart > pend || istart > iend) return null;
        let rootVal = preorder[pstart];
        let iroot = cache[rootVal];
        let root = new TreeNode(rootVal);
        root.left = helper(pstart + 1, pstart + iroot - istart, istart, iroot);
        root.right = helper(pstart + iroot - istart + 1, pend, iroot + 1, iend);
        return root;
    }) (0, size - 1, 0, size - 1);
};
