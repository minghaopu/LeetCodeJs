/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) {
    if (input === "") return [];
    function compute(a, b, op) {
        if (op === "+") return a + b;
        else if (op === "-") return a - b;
        else return a * b;
    }
    let nums = [], ops = [];
    let num = 0;
    for (let ch of input) {
        if (ch >= '0' && ch <= '9') {
            num = num * 10 + (ch - '0');
        } else {
            nums.push(num);
            ops.push(ch);
            num = 0;
        }
    }
    nums.push(num);
    if (ops.length === 0) return nums;
    return (function helper(start, end) {
        if (start + 1 === end) return [compute(nums[start], nums[end], ops[start])];
        let res = [], front = [], back = [];
        for (let i = start; i < end; i++) {
            if (i === start) {
                back = helper(i+1, end);
                for (let n of back) res.push(compute(nums[start], n, ops[i]));
            } else if (i === end - 1) {
                front = helper(start, i);
                for (let n of front) res.push(compute(n, nums[end], ops[i]));
            } else {
                front = helper(start, i);
                back = helper(i+1, end);
                for (let n1 of front) {
                    for (let n2 of back) {
                        res.push(compute(n1, n2, ops[i]));
                    }
                }
            }
        }
        return res;
    })(0, ops.length);
};