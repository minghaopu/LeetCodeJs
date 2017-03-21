/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if (typeof n !== "number" || n === 0) return [];
    let res = [];
    (function helper(path, left, right) {
        if (left === 0 && right === 0) res.push(path);
        if (left > 0) helper(path + '(', left - 1, right + 1);
        if (right > 0) helper(path + ')', left, right - 1);
    })("", n, 0);
    return res;
};