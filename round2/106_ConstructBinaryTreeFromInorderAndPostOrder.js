/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if (inorder.length ^ postorder.length) return null;
    let cache = {};
    let size = postorder.length;
    for (let i = 0; i < size; i++) cache[inorder[i]] = i;
    return (function helper(pstart, pend, istart, iend) {
        if (pstart > pend || istart > iend) return null;
        let rootVal = postorder[pend];
        let iroot = cache[rootVal];
        let root = new TreeNode(rootVal);
        root.right = helper(pend - (iend - iroot), pend - 1, iroot, iend);
        root.left = helper(pstart, pend - (iend - iroot) - 1, istart, iroot - 1);
        return root;
    }) (0, size - 1, 0, size - 1);
};