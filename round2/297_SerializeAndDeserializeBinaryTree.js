/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if (!root) return "null";
    let queue = [root];
    let front = null;
    let res = "";
    let len = 0;
    while (queue.length !== 0) {
        front = queue.shift();
        res += front === null ? "null," : front.val.toString() + ",";
        if (front) {
            queue.push(front.left);
            queue.push(front.right);
        }
    }
    return res;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (data === "") return null;
    let root = null, front = null;
    let values = data.split(',');
    let queue = [];
    let val = "";
    let leftOrRight = 0; // 0 -> left , 1 -> right;
    while (values.length !== 0) {
        val = values.shift();
        if (val === "") break;
        if (queue.length === 0) {
            if (val === "null") return null;
            root = new TreeNode(parseInt(val));
            queue.push(root);
        } else {
            front = queue[0];
            if (leftOrRight) {
                leftOrRight = 0;
                queue.shift();
                if (val === "null") front.right = null;
                else {
                    front.right = new TreeNode(parseInt(val));
                    queue.push(front.right);
                }
            } else {
                leftOrRight = 1;
                if (val === "null") front.left = null;
                else {
                    front.left = new TreeNode(parseInt(val));
                    queue.push(front.left);
                }
            }
        }
    }
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */