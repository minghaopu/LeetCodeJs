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
var levelOrder = function(root) {
    if (!root) return [];
    let queue = [root];
    let res = [];
    while (queue.length !== 0) {
        let size = queue.length;
        let row = [];
        while (size--) {
            let front = queue.shift();
            row.push(front.val);
            if (front.left) queue.push(front.left);
            if (front.right) queue.push(front.right);
        }
        res.push(row);
    }
    return res;
};