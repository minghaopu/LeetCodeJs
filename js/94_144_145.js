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
var preorderTraversal = function(root) {
    var res = [];
    if (root === null) return res;
    var stack = [root];
    while (stack.length !== 0) {
        var tmp = stack.pop();
        res.push(tmp.val);
        if (tmp.right !== null) stack.push(tmp.right);
        if (tmp.left !== null) stack.push(tmp.left);
    }
    return res;
};
var inOrderTraversal = function(root) {
    var res = [];
    if (root === null) return res;
    var stack = [root];
    while (stack.length !== 0) {
        var tmp = stack[stack.length - 1];
        if (tmp.left !== null) {
            stack.push(tmp.left);
            tmp.left = null;
        } else {
            res.push(tmp.val);
            stack.pop();
            if (tmp.right !== null) stack.push(tmp.right);
        }
    }
    return res;
}
var inOrderTraversal2 = function(root) {
    var res = [];
    if (root === null) return res;
    var stack = [];
    var cur = root;
    while (cur || stack.length !== 0) {
        if (cur) {
            stack.push(cur);
            cur = cur.left;
        } else {
            var top = stack.pop();
            res.push(top.val);
            if (top.right) {
                cur = top.right;
            }
        }
    }
    return res;
}
var postOrderTraversal = function(root) {
    var res = [];
    if (root === null) return res;
    var stack = [];
    var cur = root;
    while (cur || stack.length !== 0) {
        if (cur) {
            stack.push(cur);
            var left = cur.left;
            cur.left = null;
            cur = left;
        } else {
            var top = stack[stack.length - 1];
            if (top.right) {
                var right = top.right;
                top.right = null;
                cur = right;
            } else {
                res.push(top.val);
                stack.pop();
            }
        }
    }
    return res;
}
var postorderTraversal2 = function(root) {
    var res = [];
    if (root === null) return res;
    var stack = [];
    var cur = root;
    var last = null;
    while (cur || stack.length !== 0) {
        if (cur) {
            stack.push(cur);
            cur = cur.left;
        } else {
            var top = stack[stack.length - 1];
            if (top.right && last !== top.right) {
                cur = top.right;
            } else {
                last = top;
                res.push(top.val);
                stack.pop();
            }
        }
    }
    return res;
};