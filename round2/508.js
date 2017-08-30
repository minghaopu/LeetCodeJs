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
var findFrequentTreeSum = function(root) {
    let res = [], max = 0;
    let map = {};
    (function traversal (node){
        if (!node) return 0;
        let left = traversal(node.left), right = traversal(node.right);
        let sum = left + right + node.val;
        if (map[sum] === undefined) map[sum] = 0;
        map[sum]++;
        return sum;
    })(root);
    for (let sum in map) {
        let fre = map[sum];
        if (max > fre) continue;
        if (max < fre) {
            max = fre;
            res.length = 0;
        }
        res.push(parseInt(sum));
    }
    return res;
};

