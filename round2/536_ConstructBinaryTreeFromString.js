/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {string} s
 * @return {TreeNode}
 */
Array.prototype.top = function() {
    return this[this.length - 1];
}
var str2tree = function(s) {
    if (s.length === 0) return null;
    let stack = [];
    for (let i = 0, start = 0; i < s.length; i++) {
        let ch = s[i];
        if (ch === ')') stack.pop();
        else if (ch >= '0' && ch <= '9' || ch === '-') {
            start = i;
            while (i + 1 < s.length && s[i+1] >= '0' && s[i+1] <= '9') i++;
            let val = s.substring(start, i + 1);
            let node = new TreeNode(parseInt(val));
            if (stack.length !== 0) {
                let parent = stack.top();
                if (parent.left === null) parent.left = node;
                else parent.right = node;
            }
            stack.push(node);
        }
    }
    return stack.length === 0 ? null : stack.top();
};