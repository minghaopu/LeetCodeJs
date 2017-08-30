/**
 * @param {number[]} A
 * @return {number}
 */
var maxRotateFunction = function(A) {
    let sum = A.reduce((acc, num) => {
        return acc + num
    }, 0);
    let cur = A.reduce((acc, num, idx) => {
        return acc + num * idx
    }, 0);
    let res = cur, len = A.length;
    for (let i = 1; i < len; i++) {
        cur += sum;
        cur -= len * A[len - i];
        res = Math.max(cur, res);
    }
    return res;
};