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
    if (root === null) return [];
    let res = [];
    let st = [], top = -1;
    st.push(root);
    ++top;
    while (top > -1) {
        let node = st[top];
        st.pop();
        --top;
        res.push(node.val);
        if (node.right !== null) {
            st.push(node.right);
            ++top;
        }
        if (node.left !== null) {
            st.push(node.left);
            ++top;
        }
    }
    return res;
};
var inorderTraversal = function(root) {
    if (root === null) return [];
    let res = [];
    let st = [], top = -1;
    let cur = root;
    while (top !== -1 || cur !== null) {
        if (cur !== null) {
            st.push(cur);
            ++top;
            cur = cur.left;
        } else {
            let node = st[top];
            res.push(node.val);
            st.pop();
            --top;
            cur = node.right;
        }
    }
    return res;
};
var postorderTraversal = function(root) {
    if (root === null) return [];
    let res = [];
    let st = [], top = -1;
    let cur = root, last = null, node = null;
    while (cur !== null || top > -1) {
        if (cur !== null) {
            st.push(cur);
            cur = cur.left;
            ++top;
        } else {
            node = st[top];
            if (node.right !== null && node.right !== last) cur = node.right;
            else {
                res.push(node.val);
                st.pop();
                --top;
                last = node;
            }
        }
    }
    return res;
};