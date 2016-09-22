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
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var createTree = function(nums) {
    if (nums.length === 0) return null;
    var q = [];
    var root = new TreeNode(nums[0]);
    var node = null, left = null, right = null;
    var i = 1;
    q.push(root);
    while (q.length !== 0 && i < nums.length) {
        node = q.shift();
        if (nums[i] !== null) {
            left = new TreeNode(nums[i]);
            q.push(left);
        }else {
            left = null;
        }
        i++;
        if (nums[i] !== null) {
            right = new TreeNode(nums[i]);
            q.push(right);
        }else {
            right = null;
        }
        i++;
        node.left = left;
        node.right = right;
    }
    return root;
}
var levelOrder = function(root) {
    if (root === null) return [];
    var q = [{"node": root, "level": 0}];
    var result = [];
    var obj, level, node;
    while (q.length > 0) {
        obj = q.shift()
        level = obj.level;
        node = obj.node
        if (result[level] === undefined) result[level] = [node.val];
        else result[level].push(node.val);
        if (node.left) {
            q.push({"node": node.left, "level": level + 1});
        }
        if (node.right) {
            q.push({"node": node.right, "level": level + 1});
        }
    }
    return result;
};

var t = createTree([-8,-6,7,6,null,null,null,null,5]);
console.log(levelOrder(t));