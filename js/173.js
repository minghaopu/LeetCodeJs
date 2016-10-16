function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var createTree = function(nums) {
    if (nums.length === 0) return null;
    var q = [];
    var root = new TreeNode(nums[0]);
    var node = null,
        left = null,
        right = null;
    var i = 1;
    q.push(root);
    while (q.length !== 0 && i < nums.length) {
        node = q.shift();
        if (nums[i] !== null) {
            left = new TreeNode(nums[i]);
            q.push(left);
        } else {
            left = null;
        }
        i++;
        if (nums[i] !== null) {
            right = new TreeNode(nums[i]);
            q.push(right);
        } else {
            right = null;
        }
        i++;
        node.left = left;
        node.right = right;
    }
    return root;
}
/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */
var BSTIterator = function(root) {
    var me = this;
    me.stack = [];
    me.findNext = function(treeroot) {
        var p = treeroot;
        while (p !== null) {
            me.stack.push(p);
            p = p.left;
        }
    };
    me.findNext(root);
};



/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function() {
    return this.stack.length !== 0;
};

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function() {
    var t = this.stack.pop();
    
    if (t.right !== null) this.findNext(t.right);
    return t.val;
};


/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
*/