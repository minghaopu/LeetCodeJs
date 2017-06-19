/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
    if (!root) return [];
    let res = [];
    let queue = [root];
    let size = 0;
    while (queue.length !== 0) {
        size = queue.length;
        let tmp = -Infinity;
        while (size--) {
            let front = queue.shift();
            tmp = Math.max(tmp, front.val);
            if (front.left) queue.push(front.left);
            if (front.right) queue.push(front.right);
        }
        res.push(tmp);
    }
    return res;
};